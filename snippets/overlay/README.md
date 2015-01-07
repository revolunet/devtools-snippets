### overlay.js

`window.overlay` helper to work with semi-transparents layers for pixel-perfect designs.

```js
// create a new overlay
var x = overlay('http://host/path/to/video-[zefz].jpg');

x.toggle();
x.rm();
```

**Note:** `file://` protocol is not supported for security reasons
