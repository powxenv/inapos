# Modules

## Overview

The store workspace is built from submodules under `src/components/submodules`.

These modules are grouped and mounted by `src/routes/stores/$storeSlug.tsx`.

## Section and Module Map

### Overview section

- `dashboard-module.tsx`
  Summary cards plus recent sales.

- `alerts-module.tsx`
  Stock, order, and sync alerts.

- `today-activity-module.tsx`
  Daily activity feed.

### Sales section

- `cashier-module.tsx`
  Checkout flow. Accepts `storeId`.

- `orders-module.tsx`
  Order and transaction list. Accepts `storeId`.

- `customers-module.tsx`
  Customer CRUD. Accepts `storeId`.

- `promo-module.tsx`
  Offer tracking. Accepts `storeId`.

### Products section

- `product-list-module.tsx`
  Product CRUD. Accepts `storeId`.

- `stock-module.tsx`
  Stock and reorder point management. Accepts `storeId`.

- `purchases-module.tsx`
  Purchase records. Accepts `storeId`.

- `suppliers-module.tsx`
  Supplier CRUD. Accepts `storeId`.

### Finance section

- `cash-module.tsx`
  Cash in/out records. Accepts `storeId`.

- `expenses-module.tsx`
  Expense records. Accepts `storeId`.

- `reports-module.tsx`
  Aggregated reporting. Accepts `storeId`.

### Store section

- `users-module.tsx`
  Team roster and invitations. Uses organization data rather than `storeId` alone.

- `devices-sync-module.tsx`
  PowerSync device status view.

- `store-settings-module.tsx`
  Store metadata and currency. Accepts `storeId` and `storeName`.

- `ai-models-module.tsx`
  Assistant setup and provider/model preferences.

### Assistant section

- `assistant-module.tsx`
  Assistant chat. Accepts `storeId` and optional `minimal`.

## Common Module Responsibilities

A typical store module is responsible for all of the following in one file:

- shaping the SQL query
- reading rows with `useQueries`
- filtering and deriving UI state
- defining form validation
- rendering the HeroUI surface
- executing mutations through `powerSync.execute`

This is the current repository pattern. Prefer following it unless you are intentionally introducing a better shared abstraction across multiple modules.

## How To Add a New Module

1. Create the module file under `src/components/submodules`.
2. Export it from `src/components/submodules/index.ts`.
3. Add English and Indonesian labels/copy in `src/lib/i18n.tsx`.
4. Register the module in `moduleComponents` inside `src/routes/stores/$storeSlug.tsx`.
5. Add it to the correct `moduleGroups` section in the same route file.
6. Decide whether it should be admin-only.
7. Pass `storeId` or organization props consistently with similar modules.
8. Update docs if the module changes contributor workflow or app structure.

## When To Reuse Existing Patterns

Prefer reusing the patterns already present for:

- CRUD tables with modal forms
- alert and success message handling
- search filtering
- summary cards
- role-aware sections
- localized labels and validation messages

Use representative modules as references:

- `product-list-module.tsx` for item CRUD
- `stock-module.tsx` for row-level updates and summary cards
- `cash-module.tsx` for searchable finance tables
- `users-module.tsx` for organization-level actions
- `assistant-module.tsx` and `ai-models-module.tsx` for desktop-only features
