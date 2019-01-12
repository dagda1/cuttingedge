export enum KeyCode {
  Ctrl = 'ctrl',
  Command = 'command',
  Enter = 'enter',
  Alt = 'meta',
  LeftArrow = 'left',
  RightArrow = 'right',
  UpArrow = 'up',
  DownArrow = 'down',
  Mod = 'mod' // On Mac this ends up mapping to command whereas on Windows and Linux it maps to ctrl.
}
