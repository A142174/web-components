const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/ng-address-search/polyfills.js",
    "./dist/ng-address-search/runtime.js",
    "./dist/ng-address-search/scripts.js",
    "./dist/ng-address-search/main.js"
  ];

  await fs.ensureDir("elements");
  await concat(files, "elements/ng-address-search.js");
  await fs.copyFile(
    "./dist/ng-address-search/styles.css",
    "elements/styles.css"
  );
})();
