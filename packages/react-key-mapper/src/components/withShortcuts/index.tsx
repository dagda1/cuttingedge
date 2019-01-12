import React from 'react';
import { Shortcuts } from '../Shortcuts';
import { isComponentClass } from '../../utils';
import { CreateShortcuts } from '../../types';
const hoistStatics = require('hoist-non-react-statics');

export const withShortcuts = function<T>(createShortcuts: CreateShortcuts) {
  return (Component: React.ComponentClass<T> | React.StatelessComponent) => {
    class WrappedShortcuts extends React.Component<T> {
      ref: React.RefObject<T>;
      constructor(props: T) {
        super(props);

        this.ref = React.createRef();
      }

      render() {
        return (
          <Shortcuts createShortcuts={createShortcuts}>
            {isComponentClass(Component) ? <Component ref={this.ref} {...this.props} /> : <Component {...this.props} />}
          </Shortcuts>
        );
      }
    }

    return hoistStatics(WrappedShortcuts, Component);
  };
};
