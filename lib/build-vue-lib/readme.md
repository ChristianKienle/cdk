## What a Package needs to be buildable with *build-vue-lib*

- **Entry Point:** Located at `src/index.js`.
- **Main Fields in `package.json`:**
  - **Browser Builds:** `main` – typical value: `dist/index.js`
  - **ESM Builds:** `module` – typical value: `dist/index.esm.js`
  - **UMD Builds:** `unpkg` – typical value: `dist/index.umd.js`
- **Integration with *build-vue-lib*:**
  - Entry in `devDependencies`: `@vue-cdk/build-vue-lib`
  - Scripts:
    - `"prepublishOnly": "build-vue-lib"`
    - `"build": "build-vue-lib"`
  - `cdk`-entry in `package.json` with:
    - `"browserModuleName": "vuecdk$name"`

