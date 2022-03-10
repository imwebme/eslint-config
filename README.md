# @imwebme/eslint-config

A rule set of imwebme's ESLint configurations based on Airbnb's.

## Installation

Github repo 설정하기

`~/.npmrc`

```
//npm.pkg.github.com/:_authToken=
```

`project_root/.npmrc`

```
@imwebme:registry=https://npm.pkg.github.com/
```

Install `@imwebme/eslint-config` package:

1. Install the correct versions of each package, which are listed by the command:

```
npm info "@imwebme/eslint-config" peerDependencies
```

if using **npm 5+**, use this shortcut

```
npx install-peerdeps --dev @imwebme/eslint-config
```

if using **yarn**, use this command

```
yarn add --peer --dev @imwebme/eslint-config
```

2. Install via package manager:

```
npm install --save-dev @imwebme/eslint-config
```

or

```
yarn --dev @imwebme/eslint-config
```

## Usage

### Javascript

```javascript
module.exports = {
  extends: [
    '@imwebme/eslint-config'
  ]
}
```

### @imwebme/eslint-config/typescript

> * @typescript-eslint/eslint-plugin
> * typescript

#### Typescript

```javascript
module.exports = {
  extends: [
    '@imwebme/eslint-config',
    '@imwebme/eslint-config/typescript'
  ]
}
```
### @imwebme/eslint-config/react

> * eslint-plugin-react

#### Javascript + React

```js
{
  "extends": [
    '@imwebme/eslint-config',
    '@imwebme/eslint-config/react',
  ],
}
```

#### Typescript + React

```javascript
module.exports = {
  extends: [
    '@imwebme/eslint-config',
    '@imwebme/eslint-config/typescript',
    '@imwebme/eslint-config/react'
  ]
}
```

### @imwebme/eslint-config/prettier

> * eslint-plugin-prettier

#### Prettier

works fine with local configuration file (e.g. .prettierrc)
```js
{
  "extends": [
    '@imwebme/eslint-config',
    '@imwebme/eslint-config/prettier',
  ],
}
```