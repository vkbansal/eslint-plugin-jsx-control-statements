# For tag must contain body attribute (jsx-for-require-body)

Warn if `For` tag is missing `body` attribute.


## Rule Details

The following patterns are considered warnings:

```js
<For each={foo}>
    <div/>
</For>
```

The following patterns are not warnings:

```js
<For body={renderItem} />
```

```js
<For body={() => <div/>} />
```

## When Not To Use It

If you are not using JSX, you can disable this rule
