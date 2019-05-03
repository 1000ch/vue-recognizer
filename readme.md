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
    v-recognizer:pan.left="onPanLeft"
    v-recognizer:pan.right="onPanRight"
    v-recognizer:pan.end="onPanEnd"
  >
    Lorem ipsum
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    onPanLeft(e: HammerInput) {...},
    onPanRight(e: HammerInput) {...},
    onPanEnd(e: HammerInput) {...}
  }
});
</script>
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
