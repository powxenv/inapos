# Architecture

## High-Level Overview

INAPOS combines:

- a React 19 frontend
- TanStack Router for navigation
- HeroUI for UI primitives
- React Hook Form plus Zod for forms
- PowerSync for local-first persistence and sync
- Neon Auth and Neon Data API for auth and remote writes
- Tauri v2 for the desktop shell and the assistant runtime

## App Entry

The frontend starts in `src/main.tsx`.

It creates:

- the TanStack router from `routeTree.gen.ts`
- the shared app providers from `src/lib/powersync.tsx`

The root route in `src/routes/__root.tsx` wraps every screen with:

- `NeonAuthUIProvider`
- `I18nProvider`
- `PowerSyncSessionBridge`

## Route Model

The app has a small route surface:

- `/`
  Gate route only. It decides whether to send the user to auth, setup, or an active store.

- `/auth/*`
  Sign in, sign up, and password reset routes.

- `/setup/store`
  First-run store creation when the signed-in user does not yet have an organization/store.

- `/stores/$storeSlug`
  The actual application shell.

## Organization and Store Gate

`src/lib/organization.ts` is the main gatekeeper for store access.

It is responsible for:

- reading the signed-in session
- listing organizations
- resolving the active organization
- switching to the requested `storeSlug` when needed
- reporting one of the explicit states used by the route layer:
  - `loading`
  - `activating`
  - `signed-out`
  - `error`
  - `needs-organization`
  - `ready`

The store shell uses the active organization ID as the main `storeId` passed into modules.

## Store Shell Composition

The file `src/routes/stores/$storeSlug.tsx` is the central composition layer for the app.

It owns:

- store switching
- new store creation
- app mode switching
- profile and language preferences
- sign-out flow
- section and module navigation
- role-aware visibility for admin-only modules

### App modes

- `full`
  Full tabbed workspace

- `cashier`
  Focused checkout plus orders view

- `chat`
  Minimal assistant-only view

App mode is device-scoped and stored in `localStorage`.

### Module registration

Modules are not auto-discovered.

The shell defines:

- `moduleGroups`
- `moduleComponents`

That means new modules must be registered explicitly in the route layer.

## Submodule Pattern

Most product features live under `src/components/submodules`.

Common characteristics:

- one file per module
- data reads through `useQueries`
- mutations through `powerSync.execute(...)`
- local `useState` for transient UI state
- Zod schemas inside the component
- React Hook Form with `zodResolver`
- store context passed via `storeId` when needed

This repository currently favors co-locating UI, query strings, schema validation, and mutations in the same module file rather than splitting them into service or repository layers.

## UI Layer

The app uses:

- HeroUI components for layout, forms, tables, tabs, modals, and alerts
- Tailwind v4 for styling
- `src/main.css` for global imports and theme setup

The current styling stack imports:

- Tailwind
- Neon auth UI styles
- HeroUI styles
- Streamdown styles for assistant markdown output

## Form Pattern

Forms follow a consistent pattern:

1. Define a Zod schema inside the component.
2. Create `useForm(...)` with `zodResolver(...)`.
3. Bind HeroUI controls through `Controller` when necessary.
4. Show inline validation errors near the relevant field.
5. Persist through `powerSync.execute(...)` or auth APIs.

This pattern is used across auth screens and most store modules.

## State Management

The app mostly relies on library-local state instead of a global state library.

State sources by concern:

- auth session and organization state from Neon auth hooks
- server/local data through PowerSync plus TanStack Query bindings
- form state through React Hook Form
- device preferences through `localStorage`
- transient UI state through React `useState`

There is no Redux, Zustand, or similar app-wide state container in the current codebase.

## Role-Based Visibility

Role-aware behavior is enforced at the shell level.

Currently:

- `Store details`
- `This device`

are only shown to owners and admins.

Team management actions are also restricted by role in the users module.

## Important Caveats

- The app can render in a browser, but assistant functionality is desktop-only.
- PowerSync sync rules currently subscribe full tables; store scoping is enforced in application queries and props, not in the sync rules themselves.
- There is no separate test architecture or test harness in the repository today.
