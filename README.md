[![Publish Package to Github](https://github.com/imwebme/eslint-config/actions/workflows/deploy.yaml/badge.svg)](https://github.com/imwebme/eslint-config/actions/workflows/deploy.yaml) [![Publish Package to NPM](https://badgen.net/npm/v/@imwebme/eslint-config)](https://www.npmjs.com/package/@imwebme/eslint-config)

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

## config 개선

정규식과 관련된 모든 것과 같이 복잡한 규칙을 변경하는 경우 테스트 사례를 추가하는 것을 고려하십시오. 아마도 먼 미래에 프로그래밍을 사용하여 `.eslintrc`에 대한 테스트 케이스로 README를 구조화할 수 있을 것입니다.

`npm test`로 테스트를 실행할 수 있습니다

## zynk-react

`airbnb`룰베이스

- `react/jsx-props-no-spreading` 라이브러를 만들다보니 props를 전체 spreading 할일이 많아서 error에서 제거
- 