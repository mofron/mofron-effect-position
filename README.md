# mofron-effect-position
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

position effect for mofron

it makes easy to move the component position by the animation.

## Feature
 - default animation speed is 300ms
## Attention
 - it may not work well if "position" was configured incorrectly.
 - "position" is disabled if the target component was already set "position" style.

# Install
```
npm install mofron mofron-effect-position
```

# Sample
```html
<require>
    <tag module="mofron-comp-frame">Frame</tag>
    <tag module="mofron-effect-position">Position</tag>
</require>

<Frame style="left:0rem;" effect=Position:(left,1rem)>
</Frame>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | position | string | position type, the default is "relative" |
| | | | ["absolute"/"fixed"/"inherit"/"initial"/"relative"/"static"/"sticky"/"unset"] |
| ◯  | direction | string | direction type, the default is "left" |
| | | | ["top"/"left"/"bottom"/"right"] |
| ◯  | value | string | position value, [default is "0rem"] |

