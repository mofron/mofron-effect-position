# mofron-effect-position
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

position effect for mofron

it makes easy to move the component position by the animation.

## Feature
 - default animation speed is 300ms
## Attention
 - it may not work well if "posType" was configured incorrectly.
 - "posType" is disabled if the target component was already set "position" style.

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

<Frame>
    <effect>
        <Position speed=1000>(left)(0rem,1rem)</Position>
    </effect>
</Frame>
```
# Parameter

|Simple<br>Param | Parameter Name | Type | Description |
|:--------------:|:---------------|:-----|:------------|
| | posiType | string | position type, the default is "relative" |
| | | | ["absolute"/"fixed"/"inherit"/"initial"/"relative"/"static"/"sticky"/"unset"] |
| ◯ | direction | string | direction type, the default is "left" |
| | | | ["top"/"left"/"bottom"/"right"] |
| ◯ | value | string | begin position value, default is "0rem" |
| | | string | end position value, default is "0rem" |
| | beginVal | string | begin position value, default is "0rem" |
| | endVal | string | end position value, default is "0rem" |

