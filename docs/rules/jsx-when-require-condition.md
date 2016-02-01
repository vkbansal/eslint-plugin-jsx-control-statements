# When tag must contain condition attribute (jsx-when-require-condition)

Warn if `When` tag is missing `condition` attribute.


## Rule Details

The following patterns are considered warnings:

```js
<When>
    <div/>
</When>
```

The following patterns are not warnings:

```js
<When condition={foo}>
    <div/>
</When>
```

## When Not To Use It

If you are not using JSX, you can disable this rule
