import React from 'react';
import mousetrap from 'mousetrap';
import { ShortcutAction, ShortcutsProps } from '../../types';
import invariant from 'invariant';
import { buildShortcuts } from './buildShortcuts';

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

  bindShortcuts = () => {
    this.unbindShortcuts();

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
  };

  unbindShortcuts = () => {
    this.state.shortcuts.forEach((shortcut) => {
      if (shortcut.trapper) {
        shortcut.trapper.unbind(shortcut.keys);
      }
    });
  };

  componentDidMount() {
    this.bindShortcuts();
  }

  componentDidUpdate(prevProps: ShortcutsProps, prevState: ShortcutsState) {
    if (prevProps === this.props) {
      return;
    }

    this.bindShortcuts();
  }

  componentWillUnmount() {
    this.unbindShortcuts();
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
