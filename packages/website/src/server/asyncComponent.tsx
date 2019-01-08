import React from 'react';
import { Module, AsyncRouteComponentState, AsyncRouteComponentType, Ctx } from './types';

/**
 * Returns a new React component, ready to be instantiated.
 * Note the closure here protecting Component, and providing a unique
 * instance of Component to the static implementation of `load`.
 */
export function asyncComponent<Props>({
  loader,
  Placeholder
}: {
  loader: () => Promise<Module<React.ComponentType<Props>>>;
  Placeholder?: React.ComponentType<Props>;
}) {
  let Component: AsyncRouteComponentType<Props> | null = null;

  return class AsyncRouteComponent extends React.Component<Props, AsyncRouteComponentState> {
    static load() {
      return loader().then((ResolvedComponent) => {
        Component = ResolvedComponent!.default || ResolvedComponent;
      });
    }

    static getInitialProps(ctx: Ctx<any>) {
      if (Component !== null) {
        return Component.getInitialProps ? Component.getInitialProps(ctx) : Promise.resolve(null);
      }
    }

    constructor(props: Props) {
      super(props);
      this.updateState = this.updateState.bind(this);
      this.state = {
        Component
      };
    }

    componentWillMount() {
      AsyncRouteComponent.load().then(this.updateState);
    }

    updateState() {
      if (this.state.Component !== Component) {
        this.setState({
          Component
        });
      }
    }

    render() {
      const { Component: ComponentFromState } = this.state;

      // TODO: fix typings
      const Comp: any = ComponentFromState;

      if (ComponentFromState) {
        return <Comp {...this.props} />;
      }

      if (Placeholder) {
        return <Placeholder {...this.props} />;
      }

      return null;
    }
  };
}
