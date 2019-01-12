import React from 'react';
import mousetrap from 'mousetrap';
import { ShortcutMap, ShortcutHandler } from '../../types';
import invariant from 'invariant';
import { buildShortcuts } from './buildShortcuts';

export interface ShortcutsProps {
  mapKey: string;
  shortcutMap: ShortcutMap;
  handler: ShortcutHandler;
}

export interface ShortcutAction {
  keys: string | string[];
  action: string;
}

export interface ShortcutsState {
  shortcuts: ShortcutAction[];
}

export class Shortcuts extends React.PureComponent<ShortcutsProps, ShortcutsState> {
  constructor(props: ShortcutsProps) {
    super(props);

    this.state = {
      shortcuts: []
    };
  }

  buildShortcuts = () => {
    this.clearShortcuts();

    const { shortcutMap, mapKey: key, handler } = this.props;

    const map = shortcutMap[key];

    invariant(map, `no key ${key} found in shortcutMap`);

    const shortcutActions = buildShortcuts(map);

    shortcutActions.forEach((shortcut) => {
      mousetrap.bind(shortcut.keys, (e: ExtendedKeyboardEvent) => {
        handler(shortcut.action, e);
      });
    });

    this.setState({ shortcuts: shortcutActions });
  };

  clearShortcuts = () => {
    this.state.shortcuts.forEach((shortcut) => mousetrap.unbind(shortcut.keys));
  };

  componentDidMount() {
    this.buildShortcuts();
  }

  componentWillUnmount() {
    this.clearShortcuts();
  }

  render() {
    return this.props.children;
  }
}
