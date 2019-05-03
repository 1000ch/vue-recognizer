export enum Recognizer {
  Pan = 'pan',
  Pinch = 'pinch',
  Press = 'press',
  Rotate = 'rotate',
  Swipe = 'swipe',
  Tap = 'tap'
};

enum Timing {
  Start = 'start',
  Move = 'move',
  End = 'end',
  Cancel = 'cancel'
};

enum Direction {
  Left = 'left',
  Right = 'right',
  Up = 'up',
  Down = 'down'
};

enum InOut {
  In = 'in',
  Out = 'out'
}

type Up = 'up';
type Default = '';

export type PanEvent = Timing | Direction | Default;
export type PinchEvent = Timing | InOut | Default;
export type PressEvent = Up | Default;
export type RotateEvent = Timing | Default;
export type SwipeEvent = Direction | Default;
export type TapEvent = Default;
