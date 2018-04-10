const path = require("path");

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve("tslint-consistent-codestyle")), "./"),
    path.join(path.dirname(require.resolve("tslint-eslint-rules")), "dist/rules"),
    path.join(path.dirname(require.resolve("tslint-microsoft-contrib")), "./"),
  ],
  rules: {
    "space-before-function-paren": [
      true,
      {
        anonymous: "always",
        named: "never",
      },
    ],
    "comment-format": [true, "check-space"],
    indent: [true, "space"],
    "ter-indent": [
      true,
      2,
      { "SwitchCase": 1 },
    ],
    whitespace: [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-preblock",
    ],
    eofline: true,
    "space-in-parens": [true, "never"],
    "array-bracket-spacing": [true, "never"],
    "object-curly-spacing": [true, "always"],
    "trailing-comma": [
      true,
      {
        multiline: "never",
        singleline: "never",
      },
    ],
    semicolon: [true, "always"],
  },
  "ter-arrow-parens": [
    true,
    "as-needed",
    { "requireForBlockBody": true }
  ],
  "triple-equals": [true, "allow-null-check"],
  "no-consecutive-blank-lines": [true, 1],
  "eofline": true
};
