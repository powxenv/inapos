# Tauri GitHub Actions Notes

These workflows were aligned to the official Tauri v2 documentation:

- https://v2.tauri.app/distribute/pipelines/github/
- https://v2.tauri.app/distribute/
- https://v2.tauri.app/distribute/google-play/
- https://v2.tauri.app/distribute/app-store/
- https://v2.tauri.app/distribute/sign/android/
- https://v2.tauri.app/distribute/sign/ios/
- https://v2.tauri.app/distribute/sign/macos/
- https://v2.tauri.app/distribute/sign/windows/
- https://v2.tauri.app/start/prerequisites/

## Repository-specific decisions

- The frontend lives at the repository root and the Rust app lives in `src-tauri`.
- The project uses Bun in its Tauri hooks and has a `bun.lock`, so the workflows install dependencies with Bun.
- Android and iOS mobile projects are already initialized under `src-tauri/gen/android` and `src-tauri/gen/apple`.

## Desktop signing

- The desktop workflow follows Tauri’s `tauri-action` release pattern.
- macOS builds currently use Tauri CLI's documented `--no-sign` option so CI can produce unsigned desktop artifacts without Apple signing secrets.
- The macOS matrix uses native GitHub-hosted runners for each architecture to avoid the current cross-compilation failure in this repository's OpenSSL dependency chain.
- The current `src-tauri/tauri.conf.json` does not include Windows signing configuration under `bundle.windows`, so Windows artifacts will build unsigned until that app-specific configuration is added.
- Windows builds are still blocked by a repository dependency chain that links against `sqlite3.lib` during the Tauri build.

## Mobile signing

- Android release builds require `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD`, and `ANDROID_KEY_BASE64`.
- The Android Gradle app module now includes Tauri’s documented `release` signing configuration and expects `src-tauri/gen/android/keystore.properties` to be generated in CI.
- iOS builds support either Tauri’s automatic signing flow with `APPLE_API_ISSUER`, `APPLE_API_KEY`, and an App Store Connect private key secret, or Tauri’s manual signing flow with `IOS_CERTIFICATE`, `IOS_CERTIFICATE_PASSWORD`, and `IOS_MOBILE_PROVISION`.
- The iOS job is currently disabled until Apple signing and provisioning are configured for this repository.

## App Store distribution

- The iOS workflow builds an IPA with `--export-method app-store-connect`.
- The workflow does not upload to App Store Connect or Google Play. Tauri’s distribution guides document the build artifacts and signing requirements, but Android release upload automation is explicitly noted as not provided by Tauri.
