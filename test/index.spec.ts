import { mount, createLocalVue } from '@vue/test-utils';
import 'hammer-simulator';
import VueRecognizer from '../src';

declare var Simulator: {
  readonly gestures: {
    readonly pan: Function,
    readonly pinch: Function,
    readonly press: Function,
    readonly rotate: Function,
    readonly swipe: Function,
    readonly tap: Function,
    readonly doubletap: Function
  }
};

describe('VueRecognizer', () => {
  it('can recognize pan event', done => {
    const localVue = createLocalVue();
    localVue.use(VueRecognizer);

    const onPan = jest.fn();
    const onPanLeft = jest.fn();
    const onPanRight = jest.fn();
    const onPanUp = jest.fn();
    const onPanDown = jest.fn();
    const onPanStart = jest.fn();
    const onPanMove = jest.fn();
    const onPanEnd = jest.fn();
    const onPanCancel = jest.fn();

    const app = mount({
      template: `
        <div
          v-recognizer:pan="onPan"
          v-recognizer:pan.left="onPanLeft"
          v-recognizer:pan.right="onPanRight"
          v-recognizer:pan.up="onPanUp"
          v-recognizer:pan.down="onPanDown"
          v-recognizer:pan.start="onPanStart"
          v-recognizer:pan.move="onPanMove"
          v-recognizer:pan.end="onPanEnd"
          v-recognizer:pan.cancel="onPanCancel"
        />
      `,
      methods: {
        onPan,
        onPanLeft,
        onPanRight,
        onPanUp,
        onPanDown,
        onPanStart,
        onPanMove,
        onPanEnd,
        onPanCancel
      }
    }, { localVue });

    Simulator.gestures.pan(app.find('div').element, {
      duration: 500,
      deltaX: 100,
      deltaY: 0
    }, () => {
      expect(onPan).toHaveBeenCalled();
      expect(onPanLeft).not.toHaveBeenCalled();
      expect(onPanRight).toHaveBeenCalled();
      expect(onPanUp).not.toHaveBeenCalled();
      expect(onPanDown).not.toHaveBeenCalled();
      expect(onPanStart).toHaveBeenCalled();
      expect(onPanMove).toHaveBeenCalled();
      expect(onPanEnd).toHaveBeenCalled();
      expect(onPanCancel).not.toHaveBeenCalled();
      done();
    });
  });

  it('can recognize pinch event', done => {
    const localVue = createLocalVue();
    localVue.use(VueRecognizer);

    const onPinch = jest.fn();
    const onPinchIn = jest.fn();
    const onPinchOut = jest.fn();

    const app = mount({
      template: `
        <div
          v-recognizer:pinch="onPinch"
          v-recognizer:pinch.in="onPinchIn"
          v-recognizer:pinch.out="onPinchOut"
        />
      `,
      methods: {
        onPinch,
        onPinchIn,
        onPinchOut
      }
    }, { localVue });

    Simulator.gestures.pinch(app.find('div').element, {
      duration: 500,
      scale: 0.5
    }, () => {
      expect(onPinch).toHaveBeenCalled();
      expect(onPinchIn).toHaveBeenCalled();
      expect(onPinchOut).not.toHaveBeenCalled();
      done();
    });
  });

  it('can recognize press event', done => {
    const localVue = createLocalVue();
    localVue.use(VueRecognizer);

    const onPress = jest.fn();
    const onPressUp = jest.fn();

    const app = mount({
      template: `
        <div
          v-recognizer:press="onPress"
          v-recognizer:press.up="onPressUp"
        />
      `,
      methods: {
        onPress,
        onPressUp
      }
    }, { localVue });

    Simulator.gestures.press(app.find('div').element, null, () => {
      expect(onPress).toHaveBeenCalled();
      expect(onPressUp).toHaveBeenCalled();
      done();
    });
  });

  it('can recognize rotate event', done => {
    const localVue = createLocalVue();
    localVue.use(VueRecognizer);

    const onRotate = jest.fn();
    const onRotateStart = jest.fn();
    const onRotateMove = jest.fn();
    const onRotateEnd = jest.fn();
    const onRotateCancel = jest.fn();
    const app = mount({
      template: `
        <div
          v-recognizer:rotate="onRotate"
          v-recognizer:rotate.start="onRotateStart"
          v-recognizer:rotate.move="onRotateMove"
          v-recognizer:rotate.end="onRotateEnd"
          v-recognizer:rotate.cancel="onRotateCancel"
        />
      `,
      methods: {
        onRotate,
        onRotateStart,
        onRotateMove,
        onRotateEnd,
        onRotateCancel
      }
    }, { localVue });

    Simulator.gestures.rotate(app.find('div').element, {
      duration: 500,
      scale: 1
    }, () => {
      expect(onRotate).toHaveBeenCalled();
      expect(onRotateStart).toHaveBeenCalled();
      expect(onRotateMove).toHaveBeenCalled();
      expect(onRotateEnd).toHaveBeenCalled();
      expect(onRotateCancel).not.toHaveBeenCalled();
      done();
    });
  });

  it('can recognize swipe event', done => {
    const localVue = createLocalVue();
    localVue.use(VueRecognizer);

    const onSwipe = jest.fn();
    const onSwipeLeft = jest.fn();
    const onSwipeRight = jest.fn();
    const onSwipeUp = jest.fn();
    const onSwipeDown = jest.fn();
    const app = mount({
      template: `
        <div
          v-recognizer:swipe="onSwipe"
          v-recognizer:swipe.left="onSwipeLeft"
          v-recognizer:swipe.right="onSwipeRight"
          v-recognizer:swipe.up="onSwipeUp"
          v-recognizer:swipe.down="onSwipeDown"
        />
      `,
      methods: {
        onSwipe,
        onSwipeLeft,
        onSwipeRight,
        onSwipeUp,
        onSwipeDown
      }
    }, { localVue });

    Simulator.gestures.swipe(app.find('div').element, {
      duration: 300,
      deltaX: 400,
      deltaY: 0
    }, () => {
      expect(onSwipe).toHaveBeenCalled();
      expect(onSwipeLeft).not.toHaveBeenCalled();
      expect(onSwipeRight).toHaveBeenCalled();
      expect(onSwipeUp).not.toHaveBeenCalled();
      expect(onSwipeDown).not.toHaveBeenCalled();
      done();
    });
  });

  it('can recognize tap event', done => {
    const localVue = createLocalVue();
    localVue.use(VueRecognizer);

    const onTap = jest.fn();
    const app = mount({
      template: `<div v-recognizer:tap="onTap" />`,
      methods: { onTap }
    }, { localVue });

    Simulator.gestures.tap(app.find('div').element, {
      duration: 240
    }, () => {
      expect(onTap).toHaveBeenCalled();
      done();
    });
  });

  it('can recognize doubletap event', done => {
    const localVue = createLocalVue();
    localVue.use(VueRecognizer);

    const onDoubleTap = jest.fn();
    const app = mount({
      template: `<div v-recognizer:doubletap="onDoubleTap" />`,
      methods: { onDoubleTap }
    }, { localVue });

    Simulator.gestures.tap(app.find('div').element, {
      duration: 50
    }, () => {
      Simulator.gestures.tap(app.find('div').element, {
        duration: 50
      }, () => {
        expect(onDoubleTap).toHaveBeenCalled();
        done();
      });
    });
  });
});
