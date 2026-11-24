# MyKids Study Arena API (Phase 2)

Cloudflare Worker + D1. Personal Cloudflare account only (`irfanmokhtar1991@gmail.com`), never the company account.

## What it does
- Parents sign in with Google (ID token verified against Google's public keys; no passwords).
- A child's phone shows an 8-character code / QR link. A signed-in parent claims it, which links that child. Several parents can link the same child.
- The child's phone syncs a snapshot of results and uploads compressed JPEG answers. The parent reads them, marks structured questions step by step, and the marks flow back to the child's phone on its next sync.
- Deleting a child (or the last parent leaving) deletes all of that child's data.

## Tests
- `node scripts/test-worker.mjs`: 68 checks with a locally generated fake Google key and an in-memory store.
- `node scripts/smoke-worker-local.mjs`: same flow against the REAL Worker with a REAL local D1 (offline). Start the worker first:
  `cd worker && XDG_CONFIG_HOME=<an empty folder> npx wrangler d1 execute mykids-study-arena-db --local --file=schema.sql`, then
  `npx wrangler dev --local --port 8799 --var GOOGLE_CLIENT_ID:smoke.apps.googleusercontent.com --var SESSION_SECRET:smoke-secret-smoke-secret-smoke --var GOOGLE_JWKS_URL:http://127.0.0.1:8798/certs`.

## Deploy
`powershell -ExecutionPolicy Bypass -File worker\deploy-personal.ps1 -GoogleClientId "<id>.apps.googleusercontent.com"`
(uses its own wrangler profile in `%USERPROFILE%\.wrangler-personal`, refuses the company account, sets `SESSION_SECRET` inside Cloudflare only).

## Limits
Snapshot 900 KB, photo 700 KB (JPEG only), 400 photos per child, pairing code valid 15 minutes, rate limits on sign-in and code guessing.
