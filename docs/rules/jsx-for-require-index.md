# For tag must contain index attribute (jsx-for-require-index)

Warn if `For` tag is missing `index` attribute. And also marks the variable as defined.


## Rule Details

The following patterns are considered warnings:

```js
<For>
    <div/>
</For>
```

The following patterns are not warnings:

```js
<For index={foo}>
    <div/>
</For>
```

## When Not To Use It

If you are not using JSX, you can disable this rule
