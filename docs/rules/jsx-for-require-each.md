# For tag must contain each attribute (jsx-for-require-each)

Warn if `For` tag is missing `each` attribute.


## Rule Details

The following patterns are considered warnings:

```js
<For>
    <div/>
</For>
```

The following patterns are not warnings:

```js
<For each={foo}>
    <div/>
</For>
```

## When Not To Use It

If you are not using JSX, you can disable this rule
