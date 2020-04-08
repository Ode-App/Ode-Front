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
npm i -D eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-config-airbnb
```

### Configure eslint
* Set script on package.json
```json
"lint": "eslint ./ --ext .js,.jsx"
```
* Set .eslintrc.json file

```javascript
module.exports = {
    'env': {
      'es6': true,
      'node': true,
      'jest': true,
    },
    'extends': 'airbnb',
    'rules': {
      'no-underscore-dangle': 0,
      'arrow-body-style': 0,
      'no-shadow': 0,
      'consistent-return': 0,
      'no-nested-ternary': 0,
      'no-console': 1,
      'no-case-declarations': 0,
      'import/prefer-default-export': 0,
      'linebreak-style': 0,
      'no-use-before-define': ['error', { 'functions': true, 'classes': true, 'variables': false }]
    }
}
```

* `.editorconfig`file
```shell
# http://editorconfig.org
root = true[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true[*.md]
trim_trailing_whitespace = false
```
## Jest Automate testing

```shell
npm install -D jest jest-expo ts-jest react-test-renderer
```
### Sample testing
```javascript
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
    └── App.jsx



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

# MultiLanguage usage
* Import multilanguage
```
import { translate } from './translations/config/i18nConfig';
```

The function "translate" will return the characters in the correct language. 

```
translate('var'); 
```
