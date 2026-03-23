# Developer Documentation

This folder contains contributor and maintenance documentation for INAPOS.

INAPOS is a Tauri v2 application with:

- a React frontend at the repository root
- a Rust backend in `src-tauri`
- local-first storage and sync through PowerSync
- Neon authentication and data APIs
- optional desktop-only AI features

## Start Here

If you are new to the project, read these in order:

1. [setup.md](setup.md)
2. [project-structure.md](project-structure.md)
3. [architecture.md](architecture.md)
4. [data-and-sync.md](data-and-sync.md)

## Document Map

- [setup.md](setup.md)
  What to install, how to configure `.env`, and how to run desktop and mobile targets.

- [project-structure.md](project-structure.md)
  Repository layout and the purpose of the main directories and files.

- [architecture.md](architecture.md)
  Application composition, routing, providers, module registration, and implementation patterns.

- [modules.md](modules.md)
  The module map for the store shell and how to add or extend a module.

- [data-and-sync.md](data-and-sync.md)
  PowerSync, Neon, local persistence, query patterns, mutations, and store scoping caveats.

- [localization.md](localization.md)
  How i18n, locale formatting, currency, and device preferences are implemented.

- [ai-assistant.md](ai-assistant.md)
  Assistant setup, frontend/runtime split, provider handling, and storage/security notes.

- [build-and-release.md](build-and-release.md)
  Build commands, Tauri packaging, GitHub Actions workflows, and release triggers.

- [troubleshooting.md](troubleshooting.md)
  Common setup, runtime, and build issues.

- [tauri-github-actions.md](tauri-github-actions.md)
  Existing workflow notes focused on Tauri release/signing decisions in this repository.

## Current Project Reality

- There is no dedicated automated test suite in the repository today.
- The main validation path is `bun run check` plus manual UI verification.
- Desktop and mobile release workflows exist under `.github/workflows`.
- User documentation lives in:
  - [../README.md](../README.md)
  - [../README.id.md](../README.id.md)
- Contribution workflow expectations live in:
  - [../CONTRIBUTING.md](../CONTRIBUTING.md)
