import Vue, { PluginObject, VueConstructor } from 'vue';
import { DirectiveBinding } from 'vue/types/options';
import Hammer from 'hammerjs';
import {
  Recognizer,
  PanEvent,
  PinchEvent,
  PressEvent,
  RotateEvent,
  SwipeEvent,
  TapEvent
} from './types';

function detectPanEvent(modifiers: string[]): PanEvent {
  return modifiers.find((m): m is PanEvent => Boolean(m)) || '';
}

function detectPinchEvent(modifiers: string[]): PinchEvent {
  return modifiers.find((m): m is PinchEvent => Boolean(m)) || '';
}

function detectPressEvent(modifiers: string[]): PressEvent {
  return modifiers.find((m): m is PressEvent => Boolean(m)) || '';
}

function detectRotateEvent(modifiers: string[]): RotateEvent {
  return modifiers.find((m): m is RotateEvent => Boolean(m)) || '';
}

function detectSwipeEvent(modifiers: string[]): SwipeEvent {
  return modifiers.find((m): m is SwipeEvent => Boolean(m)) || '';
}

function detectTapEvent(modifiers: string[]): TapEvent {
  return modifiers.find((m): m is TapEvent => Boolean(m)) || '';
}

const installer: PluginObject<HammerOptions> = {
  install(Vue: VueConstructor<Vue>, options?: HammerOptions): void {
    Vue.directive('recognizer', {
      bind: (el: HTMLElement, binding: DirectiveBinding) => {
        const hammer: HammerManager = new Hammer(el, options);
        const recognizer = binding.arg as Recognizer;
        const listener = binding.value as HammerListener;
        const modifiers = Object.keys(binding.modifiers);

        switch (recognizer) {
          case Recognizer.Pan:
            const panEvent = detectPanEvent(modifiers);
            hammer.on(`pan${panEvent}`, listener);
            break;
          case Recognizer.Pinch:
            const pinchEvent = detectPinchEvent(modifiers);
            hammer.get('pinch').set({ enable: true });
            hammer.on(`pinch${pinchEvent}`, listener);
            break;
          case Recognizer.Press:
            const pressEvent = detectPressEvent(modifiers);
            hammer.on(`press${pressEvent}`, listener);
            break;
          case Recognizer.Rotate:
            const rotateEvent = detectRotateEvent(modifiers);
            hammer.get('rotate').set({ enable: true });
            hammer.on(`rotate${rotateEvent}`, listener);
            break;
          case Recognizer.Swipe:
            const swipeEvent = detectSwipeEvent(modifiers);
            hammer.on(`swipe${swipeEvent}`, listener);
            break;
          case Recognizer.Tap:
            const tapEvent = detectTapEvent(modifiers);
            hammer.on(`tap${tapEvent}`, listener);
            break;
        }
      }
    });
  }
};

export default installer;
