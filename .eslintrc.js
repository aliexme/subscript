/* eslint quotes: ["error", "double"] */
/* eslint quote-props: ["error", "always"] */
/* eslint comma-dangle: ["error", "always-multiline"], */

module.exports = {
  "extends": [
    "@tinkoff/eslint-config/app",
    "@tinkoff/eslint-config-react",
    "@tinkoff/eslint-config/jest",
    "plugin:@tinkoff/tramvai/recommended",
  ],
  "rules": {
    "import/order": ["error", {
      "groups": [["builtin", "external"], "internal", ["parent", "sibling"], "index", "object"],
      "newlines-between": "always-and-inside-groups",
      "warnOnUnassignedImports": true,
    }],
  },
}
