# tauri-sveltekit-template

A template to build tauri applications with sveltekit.

## Project Setup

1. ```npm install``` or ```yarn install``` or ```pnpm install```.
2. ```npm tauri dev``` or ```yarn tauri dev``` or ```pnpm tauri dev```.
3. configure src-tauri/tauri.conf.json to match your application settings `productName` should be renamed to your application name.
4.  ```npm tauri build``` or ```yarn tauri build``` or ```pnpm tauri build```.


## Android

The android setup is ready and the gradle has been configured to sign the app.
Use build_android workflow action to build an app.

If android is not wanted, just delete `src-tauri/gen/android` and `.github/workflows/build_android.yml`