# For tag must contain of attribute (jsx-for-require-of)

Warn if `For` tag is missing `of` attribute.


## Rule Details

The following patterns are considered warnings:

```js
<For>
    <div/>
</For>
```

The following patterns are not warnings:

```js
<For of={foo}>
    <div/>
</For>
```

## When Not To Use It

If you are not using JSX, you can disable this rule
