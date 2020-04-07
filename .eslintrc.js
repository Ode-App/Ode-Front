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