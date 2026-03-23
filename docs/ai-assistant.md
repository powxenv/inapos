# AI Assistant

## Overview

The assistant is an optional feature set with two user-facing surfaces:

- `Assistant setup`
  Provider, model, and credential configuration.

- `Assistant`
  Store-scoped chat UI.

It is also exposed through the dedicated `chat` app mode in the main shell.

## Frontend Pieces

- `src/components/submodules/ai-models-module.tsx`
  Setup UI for provider switching, model selection, and OpenRouter key management.

- `src/components/submodules/assistant-module.tsx`
  Chat UI, streaming messages, and starter prompts.

- `src/lib/assistant.ts`
  Runtime initialization and chat stream URL building.

- `src/lib/ai-http.ts`
  Fetch helper for the local AI HTTP bridge.

- `src/lib/ai-provider.ts`
  Frontend preference storage and OpenRouter model loading.

- `src/lib/ollama.ts`
  Tauri command wrappers for Ollama status and model download progress.

## Backend Pieces

- `src-tauri/src/lib.rs`
  Starts the Tauri app and exposes Ollama commands.

- `src-tauri/src/ai.rs`
  Starts the local AI HTTP server, handles OpenRouter key storage, and streams chat replies.

- `src-tauri/src/ai_data.rs`
  Implements assistant data tools and a separate AI-side PowerSync cache/runtime.

## Runtime Model

The assistant does not talk directly from the browser UI to external providers.

Instead:

1. The frontend checks provider/runtime status.
2. The frontend initializes the local AI runtime through the Tauri bridge.
3. Chat requests are sent to a local HTTP server started by the Rust app.
4. The Rust backend chooses the configured provider and model.
5. Tool-backed requests use the assistant data runtime to read or mutate store data safely.

## Local AI HTTP Bridge

The local AI HTTP server runs on:

- `http://127.0.0.1:32456/api/ai`

Frontend chat and setup requests go through this server.

`aiHttpFetch` retries a few times because the local server may still be coming up when the UI starts using it.

## Providers

### Ollama

- desktop-only
- uses the local OpenAI-compatible Ollama endpoint
- requires Ollama to be installed and running
- requires at least one local model to be available
- recommended starter model in the UI: `qwen3.5:0.8b`

### OpenRouter

- desktop-only in the current product because it still flows through the Tauri bridge
- loads model options from the public OpenRouter models endpoint
- only surfaces free text-capable model options in the setup UI
- requires a saved API key

## Preferences and Secret Storage

Frontend preferences:

- provider and model preferences are stored in `localStorage`

Secrets:

- the OpenRouter API key is stored by the Rust backend in an encrypted SQLite database
- database filename: `ai-secrets.sqlite`
- location: Tauri app data directory

This is intentionally separate from browser storage.

## Assistant Data Tools

The assistant runtime has tool-backed access to POS data.

The data layer supports:

- schema/table description
- list records
- get one record
- create/update/delete safe CRUD records
- create a sale
- delete a sale and restore related state

The assistant is explicitly instructed not to invent store data and to use available tools for real data access.

## AI-Side Local Cache

The assistant uses its own local PowerSync-backed cache:

- filename: `ai-powersync.sqlite`

This is separate from the main frontend local database.

## Constraints and Caveats

- The assistant is desktop-only.
- The chat UI can render in the frontend, but the runtime bridge depends on Tauri.
- Replies are intentionally constrained to simple English in the current backend prompt.
- The backend limits the tool/model loop depth with `step_count_is(6)`.
- Provider/model selection happens in `Assistant setup`, not in the chat screen itself.

## When Changing Assistant Features

Review all of these together:

- `assistant-module.tsx`
- `ai-models-module.tsx`
- `src/lib/assistant.ts`
- `src/lib/ai-provider.ts`
- `src/lib/ollama.ts`
- `src-tauri/src/lib.rs`
- `src-tauri/src/ai.rs`
- `src-tauri/src/ai_data.rs`

Common mistake areas:

- breaking desktop-only guards
- storing secrets in the wrong place
- changing the provider/model preference keys without migration
- changing tool behavior without considering inventory and customer total-spent side effects
