# Localization and Preferences

## i18n Source of Truth

Localization is centralized in `src/lib/i18n.tsx`.

That file contains:

- the supported language types
- message dictionaries for English and Bahasa Indonesia
- formatting helpers for currency, dates, and numbers
- the provider and hook used throughout the app

## Supported Languages

- `en`
- `id`

Locale mapping:

- `en` -> `en-US`
- `id` -> `id-ID`

## How It Works

`I18nProvider` stores the current language in component state and exposes:

- `language`
- `setLanguage`
- `currency`
- `setCurrency`
- `formatCurrency`
- `formatDate`
- `formatNumber`
- `text`

All user-facing copy should come from `text`.

## Device-Scoped Preferences

The following values are stored in `localStorage`:

- `inapos.language`
  Selected app language.

- `inapos.app-mode`
  `full`, `cashier`, or `chat`.

- `inapos.ai-provider`
  Preferred assistant provider.

- `inapos.ollama-model`
  Preferred local assistant model.

- `inapos.openrouter-model`
  Preferred online assistant model.

## Store-Scoped Preferences

Store currency is not a device preference.

It is loaded from the `stores.currency_code` field for the active store and pushed into the i18n context when the store shell loads.

That means:

- language is per device
- app mode is per device
- AI provider/model preferences are per device
- currency is per store

## Profile and Other Settings

- Profile name is updated through the auth client, not `localStorage`.
- Store metadata lives in the `stores` table.
- Assistant secrets are not stored in `localStorage`; see [ai-assistant.md](ai-assistant.md).

## Adding New Copy

When changing or adding user-facing text:

1. Update the English messages.
2. Update the Indonesian messages.
3. Reuse the existing message shape where possible.
4. Keep module names aligned with the labels rendered in the store shell.

## Current Caveat

Most copy is localized through `src/lib/i18n.tsx`, but not every validation message is centralized yet.

For example, `store-settings-module.tsx` currently contains some hardcoded Indonesian validation strings inside the component schema.

If you touch that module, prefer moving new strings into `src/lib/i18n.tsx` instead of adding more inline language-specific text.
