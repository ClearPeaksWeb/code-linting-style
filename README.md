# Linters for standardize the code

This repo contains the different configuration files and dependencies for different linters.

Those files will be extended by the proper files of the projects, as is explained below.

## Install

If you are using yarn

```
yarn add --dev @clearpeaks/code-linting-style
```

If you are using npm

```
npm install @clearpeaks/code-linting-style --save-dev
```

## Git Hook

In package.json, at scripts level, add the following hook to run prettier and linter before each commit

```
{
  "scripts": {
    ...
  },
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged && tslint -c ./tslint.json 'src/**/*.ts'"
    }
  }
}
```

#### Deprecarion warning. Upgrading from 0.14
With the version `0` the precommit hook was being declared inside of the scripts. Please change that logic on your projects.
```
{
  "scripts": {
    "precommit": "pretty-quick --staged && tslint -c ./tslint.json 'src/**/*.ts'"   // Before (BAD)
  },
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged && tslint -c ./tslint.json 'src/**/*.ts'"    // Now (GOOD)
    }
  }
}
```
Note: Version 1 of husky require node version >=6, while Husky 2 require node>=8, so we are keeping husky 1 for compatibility.

## Tslint

Create tslint config file

```
touch tslint.json
```

Add the following content to that file to extend from the clearpeaks package

```
{
  "defaultSeverity": "error",
  "extends": ["@clearpeaks/code-linting-style/tslint.js"],
  "jsRules": {
    "no-empty": true
  }
}
```

You can find more info about tslint rules [here](https://palantir.github.io/tslint/rules/)

## Prettier

Create a prettier config file

```
touch .prettierrc.js
```

Add the following content to that file to extend from the clearpeaks package

```
const clearpeaksConfig = require('@clearpeaks/code-linting-style/prettier-conf');
module.exports = clearpeaksConfig;
```

You can find more info about prettier option/config rules [here](https://prettier.io/docs/en/options.html)

More info about prettier configuration file [here](https://prettier.io/docs/en/configuration.html)

## ESLint

Create eslint config file

```
touch .eslintrc.js
```

Add the following content to that file to extend from the clearpeaks package

```
module.exports = {
  extends: [
    "./node_modules/@clearpeaks/code-linting-style/.eslintrc.js",
    "prettier"
    ]
}
```

You can find more info about eslint rules [here](https://eslint.org/docs/rules/)

## Tips

If you are using prettier in vscode, you can enable autoprettify on save, to prettify you files after saving them
Add the following config to the User Settings.

To avoid unwanted behaviour with prettier and html, we recommend you to disable runing prettier on save for html files

```
"editor.formatOnSave": true,
"prettier.eslintIntegration": true,
"[html]": {
  "editor.formatOnSave": false
},
```
