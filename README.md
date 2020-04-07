# Expo Install and configuration
### Install Expo
```shell
npm install expo-cli --global
```
### Create new expo project
```shell
expo init my-new-project
cd my-new-project
```
### Run expo project
```shell
expo start
```

## Lint for code checkstyle

### Install eslint dev dependencies
Install using: 

```shell
npm i -D eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
* Add react plugins
```shell
npm i -D eslint-plugin-react eslint-plugin-react-native
```

### Configure eslint
* Set script on package.json
```json
"lint": "eslint ./ --ext .ts,.tsx"
```
* Set .eslintrc.json file

```json
{
    "env": {
        "es6": true,
        "node": true,
        "jest": true,
        "react-native/react-native": true
    },
    "extends": [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "@typescript-eslint",
        "prettier",
        "react",
        "react-native"
    ],    
    "rules": {
        "@typescript-eslint/interface-name-prefix": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/generic-type-naming": "warn",
        "@typescript-eslint/no-array-constructor": "warn",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "class-methods-use-this": "off",
        "react/jsx-uses-vars": "error",
        "react/jsx-uses-react": "error"
    }
}
```

## Prettier
### Install Prettier
```
npm i prettier --save
```
### Configure Prettier
```javascript
module.exports = {
    semi: true,
    trailingComma: "all",
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4
};
```

## Jest Automate testing

```shell
npm install -D jest jest-expo ts-jest react-test-renderer @types/jest @types/react-test-renderer
```
### Sample testing
```typescript
import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import App from '../App';

it('renders correctly', () => {
  renderer.create(<App />);
});
```

# Folder structure

The application is divided in two parts:
* Configuration files &rarr; on the root path of the project.
* Custom code &rarr; inside the `./src` folder.


All application custom changes have to be set inside the `./src` folder following this structure:

    .
    ├── __tests__               # Test folder, with all the tests to be run.
    ├── assets                  # Contains all the assets needed for the application. 
    ├── components              # Contains all the components created for the application.
    ├── constants               # Contains the constats parameters used for the application in order to be reused.
    ├── navigation              # Contains the navigations menus.
    ├── screens                 # Contains all the screens used on the application.
    └── App.tsx



# Running App

## Run expo
* Install dependencies
```shell
expo install
```
* Run Expo using the following script
```shell
expo start
```

It will run the server and generate a QR code. Scan the QR code with the Android/iOS expo application.
* [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es)
* [iOS](https://apps.apple.com/es/app/expo-client/id982107779)

## Run Code checkstyle - Linter
```shell
npm run lint
```

## Run testing
```
npm run test
```
