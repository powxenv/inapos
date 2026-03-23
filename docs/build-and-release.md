# Build and Release

## Build Entry Points

### Frontend build

```bash
bun run build
```

This runs:

1. `bun run typecheck`
2. `vite build`

### Desktop bundle

```bash
bun tauri build
```

Tauri uses `src-tauri/tauri.conf.json` to:

- run `bun run build` before packaging
- package `../dist` as the frontend bundle

### Mobile builds

Android:

```bash
bun tauri android build
```

iOS:

```bash
bun tauri ios build
```

The repository already has generated Android and Apple projects under `src-tauri/gen`.

## Tauri Configuration

Current highlights from `src-tauri/tauri.conf.json`:

- product name: `INAPOS`
- identifier: `me.noval.inapos`
- dev URL: `http://localhost:1420`
- before dev command: `bun run dev`
- before build command: `bun run build`
- bundle targets: `all`

The current config defines a single main window and enables bundling, but does not include Windows signing configuration.

## GitHub Actions Workflows

The repo currently has two release-oriented workflows:

- `.github/workflows/tauri-desktop.yml`
- `.github/workflows/tauri-mobile.yml`

Trigger conditions:

- manual dispatch
- pushes of tags matching `app-v*`

There is no general-purpose PR CI workflow in the repository today.

## Desktop Workflow

The desktop workflow:

- builds macOS, Linux, and Windows artifacts
- installs Bun and Rust
- installs Linux system dependencies when needed
- uses `tauri-apps/tauri-action`
- creates a draft GitHub release

Current caveat:

- Windows artifacts build unsigned unless extra app-specific signing configuration is added

## Mobile Workflow

The mobile workflow:

- builds Android bundles
- builds iOS IPAs
- expects signing secrets to be configured in CI
- uploads the produced artifacts

Android expectations include:

- `ANDROID_KEY_ALIAS`
- `ANDROID_KEY_PASSWORD`
- `ANDROID_KEY_BASE64`

iOS expectations include either:

- App Store Connect API credentials

or:

- manual certificate and provisioning inputs

## Release Discipline

Because tags matching `app-v*` trigger release workflows:

- do not create those tags casually
- do not push release tags from feature branches
- coordinate release tags with maintainers

## Reference Notes

The existing workflow notes remain useful and are preserved here:

- [tauri-github-actions.md](tauri-github-actions.md)

Official references used to validate the contributor docs:

- [Tauri GitHub pipeline docs](https://v2.tauri.app/distribute/pipelines/github/)
- [Tauri prerequisites](https://v2.tauri.app/start/prerequisites/)
- [Tauri CLI reference](https://v2.tauri.app/reference/cli/)
