# Disallow Undeclared Variables, While Treating Each and Index in For and keys in With statements as declared (jsx-jcs-no-undef)

This rule is the same as the generic eslint no-undef rule (see http://eslint.org/docs/rules/no-undef) except with an
exception built in for variables that are implicitly declared by `<For>` and `<With>` statements. Note that this includes no-undef's
code and completely replaces it rather than supplementing it - if this rule is on, no-undef should be off. It is
compatible with no-undef's options and `/* global */` declarations.

## Rule Details

The following patterns are considered warnings:

```js
var a = someFunction();
b = 10;
```

```js
<For of={anArray}>
  {element}{index}
</For>
```

```js
<With foo={47}>
  {bar}
</With>
```

The following patterns are not warnings:

```js
<For of={anArray} each="element" index="index">
  {element}{index}
</For>
```

```js
<With foo={47}>
  {foo}
</With>
```

## Options

* `typeof` set to true will warn for variables used inside typeof check (Default false).

## When Not To Use It

You'll only need this if you're using <For> or <With> statements.

## Compatibility

This rule is completely compatible with ESLint no-undef, except in the case of `<For>` and `<With>` statements.

## Further Reading
- [ESLint no-undef documentation](http://eslint.org/docs/rules/no-undef)
