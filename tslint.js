const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(
      path.dirname(require.resolve('tslint-consistent-codestyle')),
      './'
    ),
    path.join(
      path.dirname(require.resolve('tslint-eslint-rules')),
      'dist/rules'
    ),
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './')
  ],
  rules: {
    'prefer-const': true,
    'no-var-keyword': true,
    quotemark: [true, 'single', 'jsx-double'],
    'no-eval': true,
    'function-constructor': true,
    'space-before-function-paren': [
      true,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
        method: 'never',
        constructor: 'never'
      }
    ],
    align: [true, 'parameters', 'statements'],
    'interface-name': [true, 'always-prefix'],
    'interface-over-type-literal': true,
    'ban-types': [
      true,
      ['Array', 'Avoid using the `Array` type. Did you mean `[]`?'],
      ['Object', 'Avoid using the `Object` type. Did you mean `{}`?'],
      ['String', 'Avoid using the `String` type. Did you mean `string`?'],
      ['Boolean', 'Avoid using the `Boolean` type. Did you mean `boolean`?']
    ],
    'no-arg': true,
    'ter-prefer-arrow-callback': [true],
    'arrow-parens': [true, 'ban-single-arg-parens'],
    'no-duplicate-imports': true,
    'one-variable-per-declaration': [true, 'ignore-for-loop'],
    'triple-equals': [true, 'allow-null-check'],
    curly: [true, 'ignore-same-line'],
    'brace-style': [true, '1tbs', { allowSingleLine: true }],
    'no-else-after-return': true,
    'comment-format': [true, 'check-space'],
    indent: [true, 'spaces', 2],
    whitespace: [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-preblock'
    ],
    eofline: true,
    'space-in-parens': [true, 'never'],
    'array-bracket-spacing': [true, 'never'],
    'object-curly-spacing': [true, 'always'],
    'max-line-length': [true, 120],
    'trailing-comma': [
      true,
      {
        'multiline': {
          'objects': 'always',
          'arrays': 'always',
          'functions': 'never',
          'typeLiterals': 'ignore'
        },
        'singleline': 'never',
        'esSpecCompliant': true
      }
    ],
    semicolon: [true, 'always', 'ignore-bound-class-methods'],
    'no-construct': true,
    'function-name': [
      true,
      {
        'function-regex': /^[a-z$][\w\d]+$/,
        'method-regex': /^[a-z$][\w\d]+$/,
        'private-method-regex': /^[a-z$][\w\d]+$/,
        'protected-method-regex': /^[a-z$][\w\d]+$/,
        'static-method-regex': /^[a-z$][\w\d]+$/
      }
    ],
    'import-name': true,
    'no-consecutive-blank-lines': [true, 1],
    'no-console': [true, 'info', 'log', 'time', 'timeEnd', 'trace'],
    'no-debugger': true,
    'no-duplicate-variable': true,
    'no-unused-variable': true,
    'no-shadowed-variable': true
  }
};
