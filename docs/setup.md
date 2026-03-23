# Setup

## Prerequisites

This repository depends on both frontend and Tauri tooling.

Required:

- Bun
- Rust stable
- Tauri system prerequisites for your operating system

Required only for mobile development:

- Android SDK and NDK for Android
- Xcode and CocoaPods for iOS

Official Tauri references used for platform-specific setup:

- [Tauri prerequisites](https://v2.tauri.app/start/prerequisites/)
- [Tauri develop docs](https://v2.tauri.app/develop/)
- [Tauri CLI reference](https://v2.tauri.app/reference/cli/)

## Environment Variables

Copy `.env.example` to `.env` and fill in:

- `VITE_NEON_AUTH_URL`
- `VITE_NEON_DATA_API_URL`
- `VITE_POWERSYNC_URL`

These are validated by `src/env.ts` at runtime. Missing or invalid URLs will fail startup.

## Install Dependencies

```bash
bun install
```

## Run the Project

### Frontend only

```bash
bun run dev
```

Use this when you only need the React app in a browser.

### Desktop app

```bash
bun tauri dev
```

`src-tauri/tauri.conf.json` is already wired so that Tauri:

- runs `bun run dev` before desktop development
- expects the frontend dev server on `http://localhost:1420`

### Mobile development

Android:

```bash
bun tauri android dev
```

iOS:

```bash
bun tauri ios dev
```

Notes:

- iOS commands require macOS.
- The repo already contains generated mobile projects under `src-tauri/gen/android` and `src-tauri/gen/apple`.
- `vite.config.ts` already reads `TAURI_DEV_HOST`, which Tauri mobile uses to expose the dev server to devices and simulators.

## Build Commands

Frontend assets:

```bash
bun run build
```

Desktop bundle:

```bash
bun tauri build
```

Android release bundle:

```bash
bun tauri android build
```

iOS IPA:

```bash
bun tauri ios build
```

## Validation Commands

Run the repository checks before opening a PR:

```bash
bun run check
```

This runs:

- `oxlint` for linting
- `oxfmt` for formatting checks
- `tsgo` for type checking

Available scripts:

- `bun run lint`
- `bun run lint:fix`
- `bun run format`
- `bun run format:fix`
- `bun run typecheck`

## Local Development Notes

- `.env` is ignored by git.
- `dist` is generated output.
- `src-tauri/target` contains Rust build artifacts and should not be treated as source.
- The app can be run in a browser, but some features are desktop-only, especially the assistant runtime.
- The repo uses Bun for day-to-day development commands even though `packageManager` still points at `pnpm`.

## When Setup Fails

Start with:

1. Re-check `.env` values.
2. Run `bun install`.
3. Confirm Rust and Tauri prerequisites for your OS.
4. If desktop builds fail, compare your machine with the Linux/macOS dependencies listed in `.github/workflows` and [build-and-release.md](build-and-release.md).
5. If mobile commands fail, re-check the Tauri mobile prerequisites and SDK/Xcode setup.
