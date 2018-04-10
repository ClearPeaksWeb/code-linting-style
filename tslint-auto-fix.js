const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-consistent-codestyle')), './'),
    path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
  ],
  rules: {
    'space-before-function-paren': [
      true,
      {
        anonymous: 'always',
        named: 'never',
      },
    ],
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
    'trailing-comma': [
      true,
      {
        multiline: 'never',
        singleline: 'never',
      },
    ],
    semicolon: [true, 'always'],
  },
  'prefer-const': true,
  'arrow-parens': [
    true,
    'as-needed',
    { 'requireForBlockBody': true }
  ],
  'comment-format': [true, 'check-space']
};
