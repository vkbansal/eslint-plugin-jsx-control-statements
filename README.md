# ESLint-plugin-JSX-control-statements

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][deps-image]][deps-url] [![Coverage Status][coverage-image]][coverage-url] [![Code Climate][climate-image]][climate-url]

## Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm install eslint
```

If you installed `ESLint` globally, you have to install React plugin globally too. Otherwise, install it locally.

```sh
$ npm install eslint-plugin-react
```

# Configuration

Add `plugins` section and specify ESLint-plugin-React as a plugin.

```json
{
  "plugins": [
    "jsx-control-statements"
  ]
}
```

If it is not already the case you must also configure `ESLint` to support JSX.

```json
{
  "ecmaFeatures": {
    "jsx": true
  }
}
```

Finally, enable all of the rules that you would like to use.

```json
{
  "rules": {
    "jsx-control-statements/jsx-if-condition": 1,
    "jsx-control-statements/jsx-if-single-child": 1
  }
}
```

# List of supported rules

* [jsx-if-condition](docs/rules/jsx-if-condition.md): Warn if `If` tag is missing `condition` attribute.
* [jsx-if-single-child](docs/rules/jsx-if-single-child.md): Warn if `If` and `Else` tags must have single children.

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php). Copyright(c) [Vivek Kumar Bansal](http://vkbansal.me/)


[npm-url]: https://npmjs.org/package/eslint-plugin-react
[npm-image]: http://img.shields.io/npm/v/eslint-plugin-react.svg?style=flat-square

[travis-url]: https://travis-ci.org/vkbansal/eslint-plugin-jsx-control-statements
[travis-image]: http://img.shields.io/travis/vkbansal/eslint-plugin-jsx-control-statements/master.svg?style=flat-square

[deps-url]: https://david-dm.org/vkbansal/eslint-plugin-jsx-control-statements
[deps-image]: https://img.shields.io/david/dev/vkbansal/eslint-plugin-jsx-control-statements.svg?style=flat-square

[coverage-url]: https://coveralls.io/r/vkbansal/eslint-plugin-jsx-control-statements?branch=master
[coverage-image]: http://img.shields.io/coveralls/vkbansal/eslint-plugin-jsx-control-statements/master.svg?style=flat-square

[climate-url]: https://codeclimate.com/github/vkbansal/eslint-plugin-jsx-control-statements
[climate-image]: http://img.shields.io/codeclimate/github/vkbansal/eslint-plugin-jsx-control-statements.svg?style=flat-square
