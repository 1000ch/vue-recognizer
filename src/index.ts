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
  TapEvent,
  DoubleTapEvent,
  isPanEvent,
  isPinchEvent,
  isPressEvent,
  isRotateEvent,
  isSwipeEvent,
  isTapEvent,
  isDoubleTapEvent
} from './types';

function detectPanEvent(modifiers: string[]): PanEvent {
  return modifiers.find((m: string) => isPanEvent(m)) as PanEvent || '';
}

function detectPinchEvent(modifiers: string[]): PinchEvent {
  return modifiers.find((m: string) => isPinchEvent(m)) as PinchEvent || '';
}

function detectPressEvent(modifiers: string[]): PressEvent {
  return modifiers.find((m: string) => isPressEvent(m)) as PressEvent || '';
}

function detectRotateEvent(modifiers: string[]): RotateEvent {
  return modifiers.find((m: string) => isRotateEvent(m)) as RotateEvent || '';
}

function detectSwipeEvent(modifiers: string[]): SwipeEvent {
  return modifiers.find((m: string) => isSwipeEvent(m)) as SwipeEvent || '';
}

function detectTapEvent(modifiers: string[]): TapEvent {
  return modifiers.find((m: string) => isTapEvent(m)) as TapEvent || '';
}

function detectDoubleTapEvent(modifiers: string[]): DoubleTapEvent {
  return modifiers.find((m: string) => isDoubleTapEvent(m)) as DoubleTapEvent || '';
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
          case Recognizer.DoubleTap:
            const doubleTapEvent = detectDoubleTapEvent(modifiers);
            hammer.on(`doubletap${doubleTapEvent}`, listener);
            break;
        }
      }
    });
  }
};

export default installer;
