import { mount, createLocalVue } from '@vue/test-utils';
import 'hammer-simulator';
import VueRecognizer from '../src';

declare var Simulator: any;

describe('VueRecognizer', () => {
  it('can recognize pan event', () => {
    const localVue = createLocalVue();
    localVue.use(VueRecognizer);

    const onPan = jest.fn();
    const app = mount({
      template: `<div v-recognizer:pan="onPan" />`,
      methods: { onPan }
    }, { localVue });

    Simulator.gestures.pan(app.find('div').element, {
      duration: 500,
      deltaX: 100,
      deltaY: 0
    }, () => {
      expect(onPan).toHaveBeenCalled();
    });
  });

  it('can recognize pinch event', () => {
    const localVue = createLocalVue();
    localVue.use(VueRecognizer);

    const onPinch = jest.fn();
    const app = mount({
      template: `<div v-recognizer:pinch="onPinch" />`,
      methods: { onPinch }
    }, { localVue });

    Simulator.gestures.pinch(app.find('div').element, {
      duration: 500,
      scale: 0.5
    }, () => {
      expect(onPinch).toHaveBeenCalled();
    });
  });

  it('can recognize press event', () => {
    const localVue = createLocalVue();
    localVue.use(VueRecognizer);

    const onPress = jest.fn();
    const app = mount({
      template: `<div v-recognizer:press="onPress" />`,
      methods: { onPress }
    }, { localVue });

    Simulator.gestures.press(app.find('div').element, {
      duration: 240
    }, () => {
      expect(onPress).toHaveBeenCalled();
    });
  });

  it('can recognize rotate event', () => {
    const localVue = createLocalVue();
    localVue.use(VueRecognizer);

    const onRotate = jest.fn();
    const app = mount({
      template: `<div v-recognizer:rotate="onRotate" />`,
      methods: { onRotate }
    }, { localVue });

    Simulator.gestures.rotate(app.find('div').element, {
      duration: 500,
      scale: 1
    }, () => {
      expect(onRotate).toHaveBeenCalled();
    });
  });

  it('can recognize swipe event', () => {
    const localVue = createLocalVue();
    localVue.use(VueRecognizer);

    const onSwipe = jest.fn();
    const app = mount({
      template: `<div v-recognizer:swipe="onSwipe" />`,
      methods: { onSwipe }
    }, { localVue });

    Simulator.gestures.swipe(app.find('div').element, {
      duration: 300,
      deltaX: 400,
      deltaY: 0
    }, () => {
      expect(onSwipe).toHaveBeenCalled();
    });
  });

  it('can recognize tap event', () => {
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
    });
  });
});
