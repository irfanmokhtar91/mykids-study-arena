# Deploy the MyKids Study Arena API to Irfan's PERSONAL Cloudflare account (irfanmokhtar1991@gmail.com).
#
# Safety:
#  - Uses its OWN wrangler profile folder (%USERPROFILE%\.wrangler-personal) so the company login on this PC is never touched or logged out.
#  - Refuses to run if the active account is the company account.
#
# Usage (from the repo root, in PowerShell):
#   powershell -ExecutionPolicy Bypass -File worker\deploy-personal.ps1 -GoogleClientId "xxxx.apps.googleusercontent.com"
param(
  [Parameter(Mandatory = $true)][string]$GoogleClientId
)
$ErrorActionPreference = 'Stop'

$ForbiddenEmail = 'irfanmokhtar@ogmeta.biz'
$AllowedEmail = 'irfanmokhtar1991@gmail.com'
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoRoot = Split-Path -Parent $ScriptDir
$env:XDG_CONFIG_HOME = Join-Path $env:USERPROFILE '.wrangler-personal'
New-Item -ItemType Directory -Force -Path $env:XDG_CONFIG_HOME | Out-Null

if ($GoogleClientId -notmatch '^[0-9a-zA-Z\-]+\.apps\.googleusercontent\.com$') {
  throw "GoogleClientId looks wrong. It should end with .apps.googleusercontent.com"
}

function Invoke-Wrangler([string]$argLine) {
  $out = cmd /c "npx --yes wrangler $argLine 2>&1" | Out-String
  return $out
}

Push-Location $ScriptDir
try {
  Write-Host "Checking the personal Cloudflare login (separate profile)..." -ForegroundColor Cyan
  $who = Invoke-Wrangler 'whoami'
  if ($who -match 'not authenticated') {
    Write-Host "Not logged in yet. A browser window will open: sign in as $AllowedEmail and click Allow." -ForegroundColor Yellow
    cmd /c "npx --yes wrangler login"
    $who = Invoke-Wrangler 'whoami'
  }
  if ($who -match [regex]::Escape($ForbiddenEmail)) { throw "SAFETY STOP: this profile is the company account ($ForbiddenEmail). Not deploying." }
  if ($who -notmatch [regex]::Escape($AllowedEmail)) { throw "SAFETY STOP: the logged-in account is not $AllowedEmail. Output was:`n$who" }
  Write-Host "Confirmed personal account:`n$who" -ForegroundColor Green

  Write-Host "`nD1 database..." -ForegroundColor Cyan
  $list = Invoke-Wrangler 'd1 list --json'
  $dbId = $null
  try { $m = ($list | ConvertFrom-Json) | Where-Object { $_.name -eq 'mykids-study-arena-db' } | Select-Object -First 1; if ($m) { $dbId = $m.uuid } } catch { }
  if (-not $dbId) {
    $created = Invoke-Wrangler 'd1 create mykids-study-arena-db'
    Write-Host $created
    if ($created -match 'database_id\s*=\s*"([^"]+)"') { $dbId = $Matches[1] }
  }
  if (-not $dbId) { throw "Could not determine the D1 database id." }

  $tomlPath = Join-Path $ScriptDir 'wrangler.toml'
  $toml = Get-Content $tomlPath -Raw
  $toml = $toml -replace 'database_id\s*=\s*"[^"]*"', "database_id = `"$dbId`""
  $toml = $toml -replace 'GOOGLE_CLIENT_ID\s*=\s*"[^"]*"', "GOOGLE_CLIENT_ID = `"$GoogleClientId`""
  Set-Content -Path $tomlPath -Value $toml -Encoding UTF8

  Write-Host "`nApplying schema.sql..." -ForegroundColor Cyan
  Write-Host (Invoke-Wrangler 'd1 execute mykids-study-arena-db --remote --file=schema.sql')

  Write-Host "`nSession secret (random, stored only inside Cloudflare)..." -ForegroundColor Cyan
  $secretList = Invoke-Wrangler 'secret list'
  if ($secretList -notmatch 'SESSION_SECRET') {
    $bytes = New-Object byte[] 48; [System.Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($bytes)
    $secret = ([System.BitConverter]::ToString($bytes)).Replace('-', '').ToLower()
    $secret | npx --yes wrangler secret put SESSION_SECRET
  } else { Write-Host "SESSION_SECRET already set." }

  Write-Host "`nDeploying..." -ForegroundColor Cyan
  $deployOut = Invoke-Wrangler 'deploy'
  Write-Host $deployOut
  if ($deployOut -notmatch '(https://[a-zA-Z0-9.-]+\.workers\.dev)') { throw "Deployed, but no workers.dev URL found in the output." }
  $workerUrl = $Matches[1]

  Write-Host "`nHealth check..." -ForegroundColor Cyan
  $health = Invoke-RestMethod -Uri "$workerUrl/api/health" -TimeoutSec 30
  Write-Host ($health | ConvertTo-Json -Compress)
  if (-not $health.googleConfigured -or -not $health.sessionConfigured) { throw "Worker is up but not fully configured." }

  $configPath = Join-Path $RepoRoot 'js\config.js'
  $cfg = Get-Content $configPath -Raw
  $cfg = $cfg -replace 'App\.CLOUD_API_URL\s*=\s*"[^"]*";', "App.CLOUD_API_URL = `"$workerUrl`";"
  $cfg = $cfg -replace 'App\.GOOGLE_CLIENT_ID\s*=\s*"[^"]*";', "App.GOOGLE_CLIENT_ID = `"$GoogleClientId`";"
  Set-Content -Path $configPath -Value $cfg -Encoding UTF8
  Write-Host "`nSUCCESS. js/config.js now points to $workerUrl" -ForegroundColor Green
} finally {
  Pop-Location
}
