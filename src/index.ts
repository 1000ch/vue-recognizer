import Vue, { PluginObject, VueConstructor } from 'vue';
import { DirectiveBinding } from 'vue/types/options';
import Hammer from 'hammerjs';

export enum Recognizer {
  Pan = 'pan',
  Pinch = 'pinch',
  Press = 'press',
  Rotate = 'rotate',
  Swipe = 'swipe',
  Tap = 'tap'
};

export enum Timing {
  Start = 'start',
  Move = 'move',
  End = 'end',
  Cancel = 'cancel'
};

export enum InOut {
  In = 'in',
  Out = 'out'
}

export enum Direction {
  Left = 'left',
  Right = 'right',
  Up = 'up',
  Down = 'down'
};

export type Up = 'up';
export type Default = '';

export type PanEvent = Timing | Direction | Default;
export type PinchEvent = Timing | InOut | Default;
export type PressEvent = Up | Default;
export type RotateEvent = Timing | Default;
export type SwipeEvent = Direction | Default;
export type TapEvent = Default;

function detectPanEvent(modifiers: string[]): PanEvent {
  return modifiers.find((m): m is PanEvent => m === m) || '';
}

function detectPinchEvent(modifiers: string[]): PinchEvent {
  return modifiers.find((m): m is PinchEvent => m === m) || '';
}

function detectPressEvent(modifiers: string[]): PressEvent {
  return modifiers.find((m): m is PressEvent => m === m) || '';
}

function detectRotateEvent(modifiers: string[]): RotateEvent {
  return modifiers.find((m): m is RotateEvent => m === m) || '';
}

function detectSwipeEvent(modifiers: string[]): SwipeEvent {
  return modifiers.find((m): m is SwipeEvent => m === m) || '';
}

function detectTapEvent(modifiers: string[]): TapEvent {
  return modifiers.find((m): m is TapEvent => m === m) || '';
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
