export enum Recognizer {
  Pan = 'pan',
  Pinch = 'pinch',
  Press = 'press',
  Rotate = 'rotate',
  Swipe = 'swipe',
  Tap = 'tap',
  DoubleTap = 'doubletap'
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
export type DoubleTapEvent = Default;

export function isDefault(modifier: string): boolean {
  return modifier === '';
}

export function isUp(modifier: string): boolean {
  return modifier === 'up';
}

export function isPanEvent(modifier: string): boolean {
  switch (modifier) {
    case Timing.Start:
    case Timing.Move:
    case Timing.End:
    case Timing.Cancel:
      return true;
    case Direction.Left:
    case Direction.Right:
    case Direction.Up:
    case Direction.Down:
      return true;
  }

  if (isDefault(modifier)) {
    return true;
  }

  return false;
}

export function isPinchEvent(modifier: string): boolean {
  switch (modifier) {
    case Timing.Start:
    case Timing.Move:
    case Timing.End:
    case Timing.Cancel:
      return true;
    case InOut.In:
    case InOut.Out:
      return true;
  }

  if (isDefault(modifier)) {
    return true;
  }

  return false;
}

export function isPressEvent(modifier: string): boolean {
  if (isUp(modifier)) {
    return true;
  }

  if (isDefault(modifier)) {
    return true;
  }

  return false;
}

export function isRotateEvent(modifier: string): boolean {
  switch (modifier) {
    case Timing.Start:
    case Timing.Move:
    case Timing.End:
    case Timing.Cancel:
      return true;
  }

  if (isDefault(modifier)) {
    return true;
  }

  return false;
}

export function isSwipeEvent(modifier: string): boolean {
  switch (modifier) {
    case Direction.Left:
    case Direction.Right:
    case Direction.Up:
    case Direction.Down:
      return true;
  }

  if (isDefault(modifier)) {
    return true;
  }

  return false;
}

export function isTapEvent(modifier: string): boolean {
  if (isDefault(modifier)) {
    return true;
  }

  return false;
}

export function isDoubleTapEvent(modifier: string): boolean {
  if (isDefault(modifier)) {
    return true;
  }

  return false;
}
