# Contributing

Thanks for contributing to INAPOS.

This repository is a Tauri v2 app with a React frontend at the repository root and a Rust backend under `src-tauri`. The project is local-first, store-scoped, and relies on PowerSync for local storage and sync.

Before making changes, read:

- [docs/README.md](docs/README.md)
- [docs/setup.md](docs/setup.md)
- [docs/architecture.md](docs/architecture.md)
- [docs/data-and-sync.md](docs/data-and-sync.md)

## Quick Start

1. Install the platform prerequisites for Tauri and Rust.
2. Install Bun.
3. Copy `.env.example` to `.env` and fill the required values.
4. Install dependencies with `bun install`.
5. Run the app in the mode you need:
   - `bun run dev` for the frontend in a browser
   - `bun tauri dev` for the desktop app

## Local Setup

### Required environment variables

The frontend validates these variables at startup:

- `VITE_NEON_AUTH_URL`
- `VITE_NEON_DATA_API_URL`
- `VITE_POWERSYNC_URL`

Keep `.env.example` in sync whenever you add or remove environment variables.

### Tooling used in this repository

- Package manager: `bun`
- Frontend dev server: `vite`
- Desktop shell: `tauri`
- Formatter: `oxfmt`
- Linter: `oxlint`
- Type checking: `tsgo`

Use the repository scripts instead of ad hoc alternatives when possible.

## Development Commands

### Frontend and desktop

- `bun run dev`: run the Vite app
- `bun tauri dev`: run the desktop app with the Vite dev server through Tauri
- `bun run build`: typecheck and build the frontend assets
- `bun tauri build`: build the desktop app bundle

### Mobile targets

Mobile projects are already initialized under `src-tauri/gen/android` and `src-tauri/gen/apple`.

- `bun tauri android dev`
- `bun tauri android build`
- `bun tauri ios dev`
- `bun tauri ios build`

Notes:

- iOS commands require macOS.
- Mobile development requires the extra Tauri mobile prerequisites documented in [docs/setup.md](docs/setup.md).
- The Vite config already reads `TAURI_DEV_HOST`, which Tauri mobile development uses to expose the frontend dev server to devices and simulators.

### Validation

Run these before opening a PR:

- `bun run check`

That command runs:

- `bun run lint`
- `bun run format`
- `bun run typecheck`

## Current Testing Reality

There is no dedicated automated test suite in the repository today.

That means contributors should treat `bun run check` plus manual verification as the baseline. Verify the specific flows you touched in the actual UI, especially when a change affects:

- checkout and stock updates
- store-scoped queries and mutations
- language changes
- assistant setup and chat behavior
- desktop-only behavior
- mobile build configuration

Document your manual verification in the PR description.

## Project Conventions

### UI and forms

- The UI uses HeroUI components.
- Forms use React Hook Form with Zod validation.
- Follow existing patterns before introducing a new abstraction.
- Prefer extending the current design system usage over adding custom UI wrappers.

### Routing and shell

- Routes live under `src/routes`.
- The main store shell is `/stores/$storeSlug`.
- Module registration is centralized in `src/routes/stores/$storeSlug.tsx`.
- If you add a new module, update:
  - the component file under `src/components/submodules`
  - `src/components/submodules/index.ts`
  - module labels in `src/lib/i18n.tsx`
  - module registration and grouping in `src/routes/stores/$storeSlug.tsx`
  - developer docs when the change affects contributor workflows

### Data flow

- Reads are typically done with `useQueries` from `@powersync/tanstack-react-query`.
- Writes are typically done with `powerSync.execute(...)`.
- The project does not currently use a separate repository or service layer for module CRUD.
- Most queries are explicitly filtered by `storeId`; preserve that pattern when touching store data.

### Localization and preferences

- User-facing copy is centralized in `src/lib/i18n.tsx`.
- The app currently supports English and Bahasa Indonesia.
- Keep both languages updated when changing user-facing text.
- Some preferences are device-scoped and stored in `localStorage`.
- Store currency is store-scoped and comes from the `stores` table, not from per-user preferences.

### AI features

- The assistant is desktop-only.
- Frontend AI preferences are stored locally.
- OpenRouter credentials are stored by the Rust backend in an encrypted SQLite database, not in `localStorage`.
- If you change assistant behavior, review both:
  - [docs/ai-assistant.md](docs/ai-assistant.md)
  - the Rust AI bridge under `src-tauri/src`

## Pull Request Expectations

There is no enforced branch naming or commit-message convention in the repository right now, but contributors should keep changes reviewable and easy to understand.

Recommended workflow:

1. Create a short-lived branch from the current mainline branch.
2. Keep the PR focused on one change area.
3. Run `bun run check`.
4. Manually verify the affected flows.
5. Update docs when behavior, setup, or contributor workflow changes.

In your PR description, include:

- what changed
- why it changed
- how you verified it
- any follow-up work or known gaps

## Documentation Expectations

Update documentation in the same change when you modify:

- setup requirements
- environment variables
- build or release workflows
- project structure
- contributor workflows
- module registration patterns
- user-facing README content
- localization behavior
- assistant setup or runtime behavior

If you change the English user README, keep `README.id.md` aligned as well.

## Release and CI Notes

- The repository has release-oriented GitHub Actions under `.github/workflows`.
- Desktop and mobile workflows run on manual dispatch or tags matching `app-v*`.
- Do not create release tags casually in a contributor PR; they are used to publish build artifacts.

See:

- [docs/build-and-release.md](docs/build-and-release.md)
- [docs/tauri-github-actions.md](docs/tauri-github-actions.md)

## Safe Contribution Checklist

Before submitting a change, check that you did not accidentally:

- remove `storeId` filtering from a store-scoped query
- break the auth and organization gate flow
- add a new env var without documenting it
- change user-facing copy in only one language
- bypass `bun run check`
- introduce a build assumption that only works on your machine
- change release tags or workflow triggers unintentionally

## Need Context First?

Use the docs set as the entry point:

- [docs/README.md](docs/README.md)
- [docs/project-structure.md](docs/project-structure.md)
- [docs/modules.md](docs/modules.md)
- [docs/troubleshooting.md](docs/troubleshooting.md)
