# Otherwise tag must come once as last child (jsx-otherwise-once-last)

Warn when `Otherwise` tag is used more than once inside `Choose` and is not last child.


## Rule Details

The following patterns are considered warnings:

```js
<Choose>
    <Otherwise/>
    <Otherwise/>
</Choose>

<Choose>
    <Otherwise/>
    <div/>
</Choose>

<Choose>
    <Otherwise/>
    <Otherwise/>
    <div/>
</Choose>
```

The following patterns are not warnings:

```js
<Choose></Choose>

<Choose>
    <When/>
</Choose>

<Choose>
    <Otherwise/>
</Choose>

<Choose>
    <When/>
    <Otherwise/>
</Choose>
```

## When Not To Use It

If you are not using JSX, you can disable this rule
