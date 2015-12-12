# If tag must contain single child (jsx-if-single-child)

Warn if `If` and `Else` tags must have single children.


## Rule Details

The following patterns are considered warnings:

```js
<If>
    <div/>
    <div/>
</If>

<If>
    <div/>
    <div/>
<Else/>
    <div/>
    <div/>
</If>

<If>
    <div/>
<Else/>
    <div/>
    <div/>
</If>

<If>
    <div/>
    <div/>
<Else/>
    <div/>
</If>
```

The following patterns are not warnings:

```js
<If>
    <div/>
</If>

<If>
    <div/>
<Else/>
    <div/>
</If>
```

## When Not To Use It

If you are not using JSX, you can disable this rule
