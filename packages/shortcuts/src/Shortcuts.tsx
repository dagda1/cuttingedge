import * as React from 'react';
import * as mousetrap from 'mousetrap';

export interface Shortcut {
  keySequence: string;
  action: (...args: any[]) => any;
}

export type CreateShortcuts = (props: any, instance?: React.ReactNode) => Shortcut[];

export interface ShortcutsProps {
  createShortcuts: CreateShortcuts;
}

export interface ShortcutsState {
  shortcuts: Shortcut[];
}

type Refable<T> = React.ReactElement<T> & {
  ref: React.RefObject<T>;
};

const componentHasRef = function<T>(component: React.ReactElement<T> | Refable<T>): component is Refable<T> {
  return !!(component as any).ref;
};

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
    this.state.shortcuts.forEach(shortcut => mousetrap.unbind(shortcut.keySequence));
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
