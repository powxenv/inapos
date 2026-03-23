# Troubleshooting

## The app fails immediately on startup

Check `.env` first.

The frontend requires valid values for:

- `VITE_NEON_AUTH_URL`
- `VITE_NEON_DATA_API_URL`
- `VITE_POWERSYNC_URL`

Those are validated at runtime by `src/env.ts`.

## `bun tauri dev` fails on desktop

Common causes:

- missing Tauri system dependencies
- Rust toolchain not installed
- frontend dependencies not installed
- port `1420` already in use

What to check:

1. `bun install`
2. Tauri OS prerequisites
3. whether another dev server is already using port `1420`

## Linux desktop build fails in CI or locally

Compare your machine with the dependencies installed in `.github/workflows/tauri-desktop.yml`, especially:

- `libwebkit2gtk-4.1-dev`
- `libssl-dev`
- `librsvg2-dev`
- `libxdo-dev`
- `libappindicator3-dev`
- `patchelf`

## Mobile development cannot reach the frontend

The project already supports `TAURI_DEV_HOST` in `vite.config.ts`.

If Android or iOS development cannot load the frontend:

1. confirm the device/simulator can reach the host machine
2. confirm Tauri provided the correct host value
3. re-run the mobile dev command

For iOS, remember that Tauri mobile development is macOS-only.

## The assistant says it is unavailable

Expected causes:

- you are not running inside Tauri
- Ollama is not installed
- Ollama is not running
- no Ollama models are installed
- OpenRouter key is missing
- the user session is stale

Check:

- `Assistant setup`
- Ollama availability on `127.0.0.1:11434`
- whether you are running the desktop app instead of browser-only Vite

## PowerSync looks stale or disconnected

First check the `This device` module.

Important implementation details:

- PowerSync connects after auth session availability
- the local cache is cleared on sign-out
- sync rules currently subscribe full tables, while most UI queries filter by `storeId`

If a data bug appears store-specific, inspect both:

- the SQL query in the module
- the PowerSync schema and sync rules

## `bun run check` fails

Run the individual commands to narrow it down:

- `bun run lint`
- `bun run format`
- `bun run typecheck`

Typical causes:

- unused locals or parameters
- formatting drift
- strict TypeScript errors

## A release workflow did not run

The GitHub Actions release workflows run on:

- manual dispatch
- tags matching `app-v*`

If no workflow ran, confirm the tag pattern before debugging anything else.

## You need more context before changing a feature

Start from:

- [README.md](../README.md)
- [README.id.md](../README.id.md)
- [docs index](README.md)
- [modules.md](modules.md)
- [architecture.md](architecture.md)
