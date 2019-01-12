import React from 'react';
import mousetrap from 'mousetrap';
import { componentHasRef } from '../../utils';
import { CreateShortcuts, Shortcut } from '../../types';

export interface ShortcutsProps {
  createShortcuts: CreateShortcuts;
}

export interface ShortcutsState {
  shortcuts: Shortcut[];
}

export class Shortcuts extends React.PureComponent<ShortcutsProps, ShortcutsState> {
  constructor(props: ShortcutsProps) {
    super(props);

    this.state = {
      shortcuts: []
    };
  }

  resolveShorcuts = (): Shortcut[] => {
    const { createShortcuts, children } = this.props;

    const component = React.Children.only(children);

    if (!componentHasRef(component)) {
      return createShortcuts(component.props);
    }

    const ref = component.ref;

    const instance = ref.current;

    return createShortcuts(component.props, instance);
  };

  buildShortcuts = () => {
    this.clearShortcuts();

    const shortcuts = this.resolveShorcuts();

    shortcuts.forEach((shortcut: Shortcut) => {
      mousetrap.bind(shortcut.keySequence, shortcut.action);
    });

    this.setState({ shortcuts });
  };

  clearShortcuts = () => {
    this.state.shortcuts.forEach((shortcut) => mousetrap.unbind(shortcut.keySequence));
  };

  componentDidMount() {
    this.buildShortcuts();
  }

  componentDidUpdate(prevProps: ShortcutsProps, prevState: ShortcutsState) {
    if (this.props === prevProps) {
      return;
    }

    this.buildShortcuts();
  }

  componentWillUnmount() {
    this.clearShortcuts();
  }

  render() {
    return this.props.children;
  }
}
