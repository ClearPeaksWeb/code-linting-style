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
In package.json, inside of npm scripts, add the following hook to run prettier and tslint before each commit
```
"precommit": "pretty-quick --staged && tslint -c node_modules/@clearpeaks/code-linting-style/tslint.js 'src/**/*.ts'"
```

## Tslint
Create tslint config file
```
tslint.json
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

## Tips
If you are using prettier in vscode, you can enable autoprettify on save, to prettify you files after saving them
Add the following config to the User Settings
```
"editor.formatOnSave": true
```