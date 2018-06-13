const path = require("path");

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve("tslint-consistent-codestyle")), "./"),
    path.join(path.dirname(require.resolve("tslint-eslint-rules")), "dist/rules"),
    path.join(path.dirname(require.resolve("tslint-microsoft-contrib")), "./"),
  ],
  rules: {
    "prefer-const": true,
    "no-var-keyword": true,
    "no-eval": true,
    "no-function-constructor-with-string-args": true,
    "space-before-function-paren": [
      true,
      { 
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always",
        "method": "never",
        "constructor": "never"
      }
    ],
    "align": [
      true,
      "parameters",
      "statements"
    ],
    "interface-name": [
      true,
      "always-prefix"
    ],
    "interface-over-type-literal": true,
    "ban-types": [
      true, [
        "Array",
        "Avoid using the `Array` type. Did you mean `[]`?"
      ],
      [
        "Object",
        "Avoid using the `Object` type. Did you mean `{}`?"
      ],
      [
        "String",
        "Avoid using the `String` type. Did you mean `string`?"
      ],
      [
        "Boolean",
        "Avoid using the `Boolean` type. Did you mean `boolean`?"
      ]
    ],
    "no-arg": true,
    "ter-prefer-arrow-callback": [true],
    "arrow-parens": [true, "ban-single-arg-parens"],
    "no-duplicate-imports": true,
    "one-variable-per-declaration": [true, "ignore-for-loop"],
    "triple-equals": [true, "allow-null-check"],
    "brace-style": [
      true,
      "1tbs",
      { "allowSingleLine": true },
    ],
    "no-else-after-return": true,
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-preblock",
    ],
    "space-in-parens": [true, "never"],
    "array-bracket-spacing": [true, "never"],
    "object-curly-spacing": [true, "always"],
    "no-construct": true,
    "function-name": [
      true,
      {
        "function-regex": /^[a-z$][\w\d]+$/,
        "method-regex": /^[a-z$][\w\d]+$/,
        "private-method-regex": /^[a-z$][\w\d]+$/,
        "protected-method-regex": /^[a-z$][\w\d]+$/,
        "static-method-regex": /^[a-z$][\w\d]+$/,
      },
    ],
    "import-name": true,
    "no-consecutive-blank-lines": [true, 1],
    "no-console": [
      true,
      "debug",
      "info",
      "log",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-debugger": true,
    "no-duplicate-variable": true
  },
};
