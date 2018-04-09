const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-consistent-codestyle')), './'),
    path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
  ],
  rules: { // base on https://github.com/airbnb/javascript/tree/44dbd0bdc41d08eb5de8ad698099ae44240f4b0d
    'space-before-function-paren': [
      true,
      {
        anonymous: 'always', // 7.11
        named: 'never', // 19.3
      },
    ],
    'arrow-parens': false, // 8.2
    'ter-arrow-parens': [
      true,
      'as-needed',
      { 'requireForBlockBody': true },
    ], // 8.4
    'comment-format': [true, 'check-space'], // 18.3
    indent: [true, 'space'], // 19.1
    'ter-indent': [
      true,
      2,
      { 'SwitchCase': 1 },
    ], // 19.1
    whitespace: [
      true,
      'check-branch', // 19.3
      'check-decl', // 19.4
      'check-operator', // 19.4
      'check-preblock', // 19.2
    ],
    eofline: true, // 19.5
    'space-in-parens': [true, 'never'], // 19.9
    'array-bracket-spacing': [true, 'never'], // 19.10
    'object-curly-spacing': [true, 'always'], // 19.11
    'trailing-comma': [
      true,
      {
        multiline: 'never',
        singleline: 'never',
      },
    ], // 20.2
    semicolon: [true, 'always'], // 21.1
  },
};
