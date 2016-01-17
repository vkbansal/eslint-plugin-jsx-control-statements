# Choose tag must not be empty (jsx-choose-not-empty)

Warn when `Choose` tag is empty or does not have at least one `When` tag as child.


## Rule Details

The following patterns are considered warnings:

```js
<Choose></Choose>

<Choose><div/></Choose>
```

The following patterns are not warnings:

```js
<Choose>
    <When/>
</Choose>
```

## When Not To Use It

If you are not using JSX, you can disable this rule
