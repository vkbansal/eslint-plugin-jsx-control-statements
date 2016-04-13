# ESLint-plugin-JSX-control-statements

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][deps-image]][deps-url] [![Coverage Status][coverage-image]][coverage-url] [![Code Climate][climate-image]][climate-url]

## Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm install eslint
```

If you installed `ESLint` globally, you have to install React plugin globally too. Otherwise, install it locally.

```sh
$ npm install eslint-plugin-jsx-control-statements
```

# Configuration

Add `plugins` section and specify ESLint-plugin-JSX-Control-Statements as a plugin.
Also add `If`, `Else` and `For` to globals.

```json
{
  "plugins": [
    "jsx-control-statements"
  ],
  "globals": {
      "If": true,
      "Else": true,
      "For": true
  }
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
    "jsx-control-statements/jsx-choose-not-empty": 1,
    "jsx-control-statements/jsx-for-require-each": 1,
    "jsx-control-statements/jsx-for-require-of": 1,
    "jsx-control-statements/jsx-for-single-child": 1,
    "jsx-control-statements/jsx-if-require-condition": 1,
    "jsx-control-statements/jsx-if-single-child": 1,
    "jsx-control-statements/jsx-otherwise-once-last": 1,
    "jsx-control-statements/jsx-use-if-tag": 1,
    "jsx-control-statements/jsx-when-require-condition": 1
  }
}
```

# List of supported rules
* [jsx-choose-not-empty](docs/rules/jsx-choose-not-empty.md): Warn when `Choose` tag is empty or does not have at least one `When` tag as child.
* [jsx-for-require-each](docs/rules/jsx-for-require-each.md): Warn if `For` tag is missing `each` attribute. And also marks the variable as defined.
* [jsx-for-require-of](docs/rules/jsx-for-require-of.md): Warn if `For` tag is missing `of` attribute.
* [jsx-for-single-child](docs/rules/jsx-for-single-child.md): Warn if `For` tags does not have single child.
* [jsx-if-require-condition](docs/rules/jsx-if-require-condition.md): Warn if `If` tag is missing `condition` attribute.
* [jsx-if-single-child](docs/rules/jsx-if-single-child.md): Warn if `If` and `Else` tags does not have single child.
* [jsx-otherwise-once-last](docs/rules/jsx-otherwise-once-last.md): Warn when `Otherwise` tag is used more than once inside `Choose` and is not last child.
* [jsx-use-if-tag](docs/rules/jsx-use-if-tag.md): Use `If` tag instead of ternary operator.
* [jsx-when-require-condition](docs/rules/jsx-when-require-condition.md): Warn if `When` tag is missing `condition` attribute.

## Credits
Thanks to @yannickcr for his awesome [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react).

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php). Copyright(c) [Vivek Kumar Bansal](http://vkbansal.me/)


[npm-url]: https://npmjs.org/package/eslint-plugin-jsx-control-statements
[npm-image]: http://img.shields.io/npm/v/eslint-plugin-jsx-control-statements.svg?style=flat-square

[travis-url]: https://travis-ci.org/vkbansal/eslint-plugin-jsx-control-statements
[travis-image]: http://img.shields.io/travis/vkbansal/eslint-plugin-jsx-control-statements/master.svg?style=flat-square

[deps-url]: https://david-dm.org/vkbansal/eslint-plugin-jsx-control-statements
[deps-image]: https://img.shields.io/david/dev/vkbansal/eslint-plugin-jsx-control-statements.svg?style=flat-square

[coverage-url]: https://coveralls.io/r/vkbansal/eslint-plugin-jsx-control-statements?branch=master
[coverage-image]: http://img.shields.io/coveralls/vkbansal/eslint-plugin-jsx-control-statements/master.svg?style=flat-square

[climate-url]: https://codeclimate.com/github/vkbansal/eslint-plugin-jsx-control-statements
[climate-image]: http://img.shields.io/codeclimate/github/vkbansal/eslint-plugin-jsx-control-statements.svg?style=flat-square
