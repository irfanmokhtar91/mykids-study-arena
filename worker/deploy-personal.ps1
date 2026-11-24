$ErrorActionPreference = 'Stop'

# Personal Cloudflare Account Safety Guard
$ForbiddenEmail = 'irfanmokhtar@ogmeta.biz'
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoRoot = Split-Path -Parent $ScriptDir

function Get-WranglerWhoami {
  $out = cmd /c "wrangler whoami 2>&1"
  return ($out -join "`n")
}

Write-Host "Checking Wrangler authentication..." -ForegroundColor Cyan
$whoami = Get-WranglerWhoami

if ($whoami -match [regex]::Escape($ForbiddenEmail) -or $whoami -match 'not authenticated' -or -not ($whoami -match 'Account ID')) {
  Write-Warning "SAFETY STOP: Wrangler is currently logged into '$ForbiddenEmail' (company account) or not logged in."
  Write-Host "Logging out of current session and prompting login for your PERSONAL Cloudflare account..." -ForegroundColor Yellow
  cmd /c "wrangler logout" | Out-Null
  cmd /c "wrangler login"
  $whoami = Get-WranglerWhoami
  if ($whoami -match [regex]::Escape($ForbiddenEmail)) {
    throw "Refused to deploy: still logged into company account '$ForbiddenEmail'."
  }
  if (-not ($whoami -match 'Account ID')) {
    throw "Wrangler login failed or incomplete. Please re-run this script after logging into your personal Cloudflare account."
  }
}

Write-Host "Confirmed personal Cloudflare session:" -ForegroundColor Green
Write-Host $whoami

Push-Location $ScriptDir
try {
  Write-Host "`nCreating / verifying D1 database 'mykids-study-arena-db'..." -ForegroundColor Cyan
  $d1List = cmd /c "wrangler d1 list --json 2>&1" | Out-String
  $dbId = $null
  try {
    $parsedList = $d1List | ConvertFrom-Json
    $matchDb = $parsedList | Where-Object { $_.name -eq 'mykids-study-arena-db' } | Select-Object -First 1
    if ($matchDb) { $dbId = $matchDb.uuid }
  } catch { }

  if (-not $dbId) {
    $createOut = cmd /c "wrangler d1 create mykids-study-arena-db 2>&1" | Out-String
    Write-Host $createOut
    if ($createOut -match 'database_id\s*=\s*"([^"]+)"') {
      $dbId = $Matches[1]
    }
  }

  if (-not $dbId) {
    throw "Could not determine D1 database_id for 'mykids-study-arena-db'."
  }

  $tomlPath = Join-Path $ScriptDir "wrangler.toml"
  $toml = Get-Content $tomlPath -Raw
  $toml = $toml -replace 'database_id\s*=\s*"[^"]*"', "database_id = `"$dbId`""
  Set-Content -Path $tomlPath -Value $toml -Encoding UTF8
  Write-Host "Updated worker/wrangler.toml with database_id = $dbId" -ForegroundColor Green

  Write-Host "`nApplying schema.sql to remote D1..." -ForegroundColor Cyan
  cmd /c "wrangler d1 execute mykids-study-arena-db --remote --file=schema.sql"
  if ($LASTEXITCODE -ne 0) { throw "D1 schema execution failed." }

  Write-Host "`nDeploying Worker to personal Cloudflare account..." -ForegroundColor Cyan
  $deployOut = cmd /c "wrangler deploy 2>&1" | Out-String
  Write-Host $deployOut
  if ($LASTEXITCODE -ne 0) { throw "wrangler deploy failed." }

  $workerUrl = $null
  if ($deployOut -match '(https://[a-zA-Z0-9.-]+\.workers\.dev)') {
    $workerUrl = $Matches[1]
  }
  if (-not $workerUrl) {
    throw "Worker deployed, but could not parse workers.dev URL from wrangler output."
  }

  $configPath = Join-Path $RepoRoot "js\config.js"
  $cfg = Get-Content $configPath -Raw
  $cfg = $cfg -replace 'App\.CLOUD_API_URL\s*=\s*"[^"]*";', "App.CLOUD_API_URL = `"$workerUrl`";"
  Set-Content -Path $configPath -Value $cfg -Encoding UTF8

  Write-Host "`nSUCCESS! Updated js/config.js with CLOUD_API_URL = $workerUrl" -ForegroundColor Green
  Write-Host "Run these commands from repo root to publish the live online sync endpoint to GitHub Pages:" -ForegroundColor Yellow
  Write-Host "  git add js/config.js worker/wrangler.toml; git commit -m `"Enable personal Cloudflare online sync API`"; git push origin main"
} finally {
  Pop-Location
}
