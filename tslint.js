const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-consistent-codestyle')), './'),
    path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
  ],
  rules: {
    'prefer-const': true,
    'no-var-keyword': true,
    quotemark: [
      true,
      'single',
      'jsx-double',
    ],
    'no-eval': true,
    'no-function-constructor-with-string-args': true,
    'space-before-function-paren': [
      true,
      {
        anonymous: 'always',
        named: 'never',
      },
    ],
    "align": [
      true,
      "arguments",
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
    'ter-prefer-arrow-callback': [true],
    'arrow-parens': [
      true,
      'as-needed',
      { 'requireForBlockBody': true }
    ],
    'no-duplicate-imports': true,
    'one-variable-per-declaration': [true, 'ignore-for-loop'],
    'triple-equals': [true, 'allow-null-check'],
    'no-boolean-literal-compare': true,
    curly: [true, 'ignore-same-line'],
    'brace-style': [
      true,
      '1tbs',
      { allowSingleLine: true },
    ],
    'no-else-after-return': true,
    'comment-format': [true, 'check-space'],
    indent: [true, 'space'],
    'ter-indent': [
      true,
      2,
      { 'SwitchCase': 1 },
    ],
    whitespace: [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-preblock',
    ],
    eofline: true,
    'space-in-parens': [true, 'never'],
    'array-bracket-spacing': [true, 'never'],
    'object-curly-spacing': [true, 'always'],
    'max-line-length': [true, 120],
    'trailing-comma': [
      true,
      {
        multiline: 'never',
        singleline: 'never',
      },
    ],
    semicolon: [true, 'always'],
    'no-construct': true,
    'function-name': [
      true,
      {
        'function-regex': /^[a-z$][\w\d]+$/,
        'method-regex': /^[a-z$][\w\d]+$/,
        'private-method-regex': /^[a-z$][\w\d]+$/,
        'protected-method-regex': /^[a-z$][\w\d]+$/,
        'static-method-regex': /^[a-z$][\w\d]+$/,
      },
    ],
    'import-name': true,
    "no-consecutive-blank-lines": [
      true,
      1
    ],
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
    "no-duplicate-variable": true,
    "no-unused-variable": [
      true
    ],
  },
};
