# vue-recognizer [![Build Status](https://travis-ci.org/1000ch/vue-recognizer.svg?branch=master)](https://travis-ci.org/1000ch/vue-recognizer)

Vue.js plugin to recognize touch, mouse, pointer events using [Hammer.js](http://hammerjs.github.io/getting-started/).

## Install

```bash
npm install --save vue-recognizer
```

## Usage

Import `vue-recognizer` and install it.

```ts
import Vue from 'vue';
import VueRecognizer from 'vue-recognizer';

Vue.use(VueRecognizer);
```

```html
<template>
  <div
    v-recognizer:pan="onPan"
    v-recognizer:pan.right="onPanRight"
  >
    Lorem ipsum
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    onPan(e: HammerInput) {...},
    onPanRight(e: HammerInput) {...}
  }
});
</script>
```

### As Nuxt plugin

Prepare plugin file to install this plugin as below. Then name it such as `vue-recognizer.ts` and put it into `plugins` folder.

```ts
import Vue from 'vue';
import VueRecognizer from 'vue-recognizer';

Vue.use(VueRecognizer);
```

To load it, configure `nuxt.config.js` or `nuxt.config.ts` as below.

```ts
const config = {
  plugins: [
    {
      src: '~/plugins/vue-recognizer.ts',
      ssr: false
    }
  ]
};

export default config;
```

## API

### [Pan](http://hammerjs.github.io/recognizer-pan/)

- `v-recognizer:pan="onPan"`
- `v-recognizer:pan.start="onPanStart"`
- `v-recognizer:pan.move="onPanMove"`
- `v-recognizer:pan.end="onPanEnd"`
- `v-recognizer:pan.cancel="onPanCancel"`
- `v-recognizer:pan.left="onPanLeft"`
- `v-recognizer:pan.right="onPanRight"`
- `v-recognizer:pan.up="onPanUp"`
- `v-recognizer:pan.down="onPanDown"`

### [Pinch](http://hammerjs.github.io/recognizer-pinch/)

- `v-recognizer:pinch="onPinch"`
- `v-recognizer:pinch.start="onPinchStart"`
- `v-recognizer:pinch.move="onPinchMove"`
- `v-recognizer:pinch.end="onPinchEnd"`
- `v-recognizer:pinch.cancel="onPinchCancel"`
- `v-recognizer:pinch.in="onPinchIn"`
- `v-recognizer:pinch.out="onPinchOut"`

### [Press](http://hammerjs.github.io/recognizer-press/)

- `v-recognizer:press="onPress"`
- `v-recognizer:press.up="onPressUp"`

### [Rotate](http://hammerjs.github.io/recognizer-rotate/)

- `v-recognizer:rotate="onRotate"`
- `v-recognizer:rotate.start="onRotateStart"`
- `v-recognizer:rotate.move="onRotateMove"`
- `v-recognizer:rotate.end="onRotateEnd"`
- `v-recognizer:rotate.cancel="onRotateCancel"`

### [Swipe](http://hammerjs.github.io/recognizer-swipe/)

- `v-recognizer:swipe="onSwipe"`
- `v-recognizer:swipe.left="onSwipeLeft"`
- `v-recognizer:swipe.right="onSwipeRight"`
- `v-recognizer:swipe.up="onSwipeUp"`
- `v-recognizer:swipe.down="onSwipeDown"`

### [Tap](http://hammerjs.github.io/recognizer-tap/)

- `v-recognizer:tap="onTap"`
- `v-recognizer:doubletap="onDoubleTap"`

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
