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
    "indent": [true, "spaces", 2],
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
  "arrow-parens": [true, "ban-single-arg-parens"],
  "triple-equals": [true, "allow-null-check"],
  "no-consecutive-blank-lines": [true, 1],
  "eofline": true
};
