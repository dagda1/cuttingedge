import React, { FunctionComponent, ComponentClass } from 'react';
import mousetrap from 'mousetrap';
import { ShortcutMap, ShortcutHandler } from '../../types';
import invariant from 'invariant';
import { buildShortcuts } from './buildShortcuts';

export interface ShortcutsProps<
  TScopedWrapperComponentType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> {
  mapKey: string;
  shortcutMap: ShortcutMap;
  handler: ShortcutHandler;
  scoped?: boolean;
  tabIndex?: number;
  ScopedWrapperComponentType:
    | FunctionComponent<TScopedWrapperComponentType>
    | ComponentClass<TScopedWrapperComponentType>
    | string;
}

export interface ShortcutAction {
  keys: string | string[];
  action: string;
  trapper?: MousetrapStatic | MousetrapInstance;
}

export interface ShortcutsState {
  shortcuts: ShortcutAction[];
}

export class Shortcuts extends React.PureComponent<ShortcutsProps, ShortcutsState> {
  ref: React.RefObject<HTMLDivElement>;

  constructor(props: ShortcutsProps) {
    super(props);

    this.state = {
      shortcuts: []
    };

    this.ref = React.createRef();
  }

  static defaultProps = {
    scoped: false,
    tabIndex: -1,
    ScopedWrapperComponentType: 'div'
  };

  componentDidMount() {
    const { shortcutMap, mapKey: key, handler, scoped } = this.props;

    const map = shortcutMap[key];

    invariant(map, `no key ${key} found in shortcutMap`);

    const shortcutActions = buildShortcuts(map);

    const trapper = scoped && this.ref.current ? new mousetrap(this.ref.current) : mousetrap;

    shortcutActions.forEach((shortcut) => {
      trapper.bind(shortcut.keys, (e: ExtendedKeyboardEvent) => {
        handler(shortcut.action, e);
      });

      shortcut.trapper = trapper;
    });

    this.setState({ shortcuts: shortcutActions });
  }

  componentWillUnmount() {
    this.state.shortcuts.forEach((shortcut) => {
      if (shortcut.trapper) {
        shortcut.trapper.unbind(shortcut.keys);
      }
    });
  }

  render() {
    const { scoped, children, tabIndex, ScopedWrapperComponentType } = this.props;

    if (!scoped) {
      return children;
    }

    return (
      <ScopedWrapperComponentType tabIndex={tabIndex} ref={this.ref} className="mousetrap">
        {children}
      </ScopedWrapperComponentType>
    );
  }
}
