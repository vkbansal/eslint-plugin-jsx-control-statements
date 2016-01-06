# For tag must contain single child (jsx-for-single-child)

Warn if `For` tags must have single children.


## Rule Details

The following patterns are considered warnings:

```js
<For>
    <div/>
    <div/>
</For>
```

The following patterns are not warnings:

```js
<For>
    <div/>
</For>
```

## When Not To Use It

If you are not using JSX, you can disable this rule
