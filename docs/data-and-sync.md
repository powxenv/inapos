# Data and Sync

## Overview

INAPOS is local-first.

At a high level:

1. The user authenticates through Neon Auth.
2. The frontend opens a local PowerSync database.
3. UI reads run against the local database through SQL queries.
4. UI writes are executed locally first.
5. PowerSync uploads CRUD changes to the remote backend.

## Main Pieces

### Auth

`src/auth.ts` creates:

- `authClient` for authentication and organization APIs
- `neonClient` for remote table operations used by the PowerSync upload connector

### Local database

`src/lib/powersync.tsx` defines:

- the PowerSync schema used by the frontend
- the local database filename: `warungku.sqlite`
- the upload connector
- the shared `QueryClient`

### Sync bridge

`PowerSyncSessionBridge` connects PowerSync when a session token exists and clears local PowerSync state on sign-out.

That means logging out is destructive to the local synced cache by design.

## Tables in the Current Schema

Frontend schema and SQL source of truth align around these tables:

- `cash_entries`
- `customers`
- `expenses`
- `inventory_items`
- `products`
- `promotions`
- `purchases`
- `sale_items`
- `sales`
- `stores`
- `suppliers`

Schema files:

- `src/lib/powersync.tsx`
- `powersync/schema.sql`

## Query Pattern

Most frontend reads use `useQueries` from `@powersync/tanstack-react-query`.

Typical pattern:

1. pass parameters, usually `storeId`
2. run raw SQL against the local PowerSync database
3. derive filtered or summarized UI state in the component

There is no shared query builder or repository layer today.

## Mutation Pattern

Most frontend writes use:

```ts
await powerSync.execute(sql, parameters)
```

This happens directly inside module components.

Typical uses:

- `INSERT`
- `UPDATE`
- `DELETE`

The PowerSync connector then uploads supported CRUD changes through `neonClient`.

## Upload Connector

`src/lib/powersync.tsx` defines the upload connector that:

- fetches credentials from the current auth session
- uploads queued CRUD operations
- maps PUT, PATCH, and DELETE operations to Neon Data API writes

Mutable tables are explicitly whitelisted in code.

## Store Scoping

The current product is store-oriented, but store scoping is handled mostly in application queries.

Important caveat:

- `powersync/sync-rules.yaml` currently subscribes `SELECT *` for every synced table
- most UI queries then apply `WHERE store_id = ?` locally

That means contributors should be careful when changing:

- sync rules
- store-scoped SQL filters
- organization-to-store ID wiring

If selective sync becomes a requirement later, `sync-rules.yaml` will need explicit redesign.

## Store and Organization Relationship

The app uses organization data from the auth layer as the main store context.

In practice:

- the active organization ID is passed into most modules as `storeId`
- the `stores` PowerSync table stores metadata such as store name, address, receipt note, and currency

Contributors touching store access should review both:

- `src/lib/organization.ts`
- `src/routes/stores/$storeSlug.tsx`

## Local Files and Cache Names

- Main synced database: `warungku.sqlite`
- Assistant-side local cache: `ai-powersync.sqlite`

The assistant cache is separate from the main frontend PowerSync file.

## Data Caveats

- Purchases are header-level records only; they do not update stock automatically.
- Promotions are tracked independently and are not wired into checkout pricing.
- Orders use the same underlying `sales` table as completed checkout transactions.
- The project currently mixes localized copy and some hardcoded strings in module implementations, so changing validation or alert text may require checking more than one file.
