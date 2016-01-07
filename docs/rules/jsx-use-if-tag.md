# Use If tag (jsx-use-if-tag)

Use `If` tag instead of ternary operator.


## Rule Details

The following patterns are considered warnings:

```js
foo ? <div/> : null

foo ? <div/> : <span/>
```

The following patterns are not warnings:

```js

<If condition={foo}>
    <div/>
</If>

<If condition={foo}>
    <div/>
<Else/>
    <div/>
</If>

```

## When Not To Use It

If you are not using JSX, you can disable this rule
