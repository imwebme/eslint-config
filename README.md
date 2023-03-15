[![Publish Package to Github](https://github.com/imwebme/eslint-config/actions/workflows/deploy.yaml/badge.svg)](https://github.com/imwebme/eslint-config/actions/workflows/deploy.yaml)

# @imwebme/eslint-config

A rule set of imwebme's ESLint configurations

- eslint:recommended [List of available rules - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/rules/)
- @typescript-eslint/recommended [typescript-eslint/packages/eslint-plugin at main · typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)

## Installation

```
npm install --save-dev @imwebme/eslint-config
```

or

```
yarn --dev @imwebme/eslint-config
```

## Usage

### Javascript

`.eslintrc.js`
```js
module.exports = {
  extends: [
    '@imwebme/eslint-config'
  ]
}
```

`.eslintrc`
```
{
  "extends": [
    "@imwebme/eslint-config"
  ]
}
```

### @imwebme/eslint-config/typescript

> * @typescript-eslint/eslint-plugin
> * typescript

#### Typescript

`.eslintrc.js`
```js
module.exports = {
  extends: [
    '@imwebme/eslint-config',
    '@imwebme/eslint-config/typescript'
  ]
}
```

`.eslintrc`
```
{
  "extends": [
    "@imwebme/eslint-config",
    "@imwebme/eslint-config/typescript"
  ]
}
```

### @imwebme/eslint-config/react

> * eslint-plugin-react

#### Javascript + React

`.eslintrc.js`
```js
{
  "extends": [
    '@imwebme/eslint-config',
    '@imwebme/eslint-config/react',
  ],
}
```

`.eslintrc`
```
{
  "extends": [
    "@imwebme/eslint-config",
    "@imwebme/eslint-config/react"
  ]
}
```

#### Typescript + React

`.eslintrc.js`
```js
module.exports = {
  extends: [
    '@imwebme/eslint-config',
    '@imwebme/eslint-config/typescript',
    '@imwebme/eslint-config/react'
  ]
}
```

`.eslintrc`
```
{
  "extends": [
    "@imwebme/eslint-config",
    "@imwebme/eslint-config/typescript",
    "@imwebme/eslint-config/react"
  ]
}
```

### @imwebme/eslint-config/prettier

> * eslint-plugin-prettier

#### Prettier

`.prettierrc`
```js
{
  "extends": [
    '@imwebme/eslint-config',
    '@imwebme/eslint-config/prettier',
  ],
}
```

## bundle
