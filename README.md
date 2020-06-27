# mofron-effect-position
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

center positon effect module

position setter module for horizontal and vertical


# Install
```
npm install mofron mofron-effect-position
```

# Sample
```html
<setting>
    <tag load="mofron-comp-text">Text</tag>
    <tag load="mofron-effect-position">Pos</tag>
</setting>

<div size=(1.5rem,0.8rem) style="display:flex;" base-color=[220,220,220]>
    <Text effect=Pos:(center,center)>Position</Text>
</div>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | horiz | string | horizontal position [left,center,right] |
| | | string(size) | horizontal offset size |
| | hOffset | string(size) | horizontal offset size |
| ◯  | vrtic | string | vertical position [top,center,bottom] |
| | | string(size) | vertical offset size |
| | vOffset | string(size) | vertical offset size |

