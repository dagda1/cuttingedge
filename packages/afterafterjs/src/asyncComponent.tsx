import React, { ReactNode } from 'react';
import { Module, AsyncRouteComponentState, AsyncRouteComponentType, Ctx } from './types';
import { Component, ComponentType } from 'react';

/**
 * Returns a new React component, ready to be instantiated.
 * Note the closure here protecting Component, and providing a unique
 * instance of Component to the static implementation of `load`.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function asyncComponent<Props>({
  loader,
  Placeholder
}: {
  loader: () => Promise<Module<ComponentType<Props>>>;
  Placeholder?: ComponentType<Props>;
}) {
  // keep Component in a closure to avoid doing this stuff more than once
  let ComponentToRender: AsyncRouteComponentType<Props> | null = null;

  return class AsyncRouteComponent extends Component<Props, AsyncRouteComponentState> {
    /**
     * Static so that you can call load against an uninstantiated version of
     * this component. This should only be called one time outside of the
     * normal render path.
     */
    static load(): Promise<void> {
      return loader().then((ResolvedComponent) => {
        ComponentToRender = ResolvedComponent.default || ResolvedComponent;
      });
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    static getInitialProps(ctx: Ctx<Props>) {
      // Need to call the wrapped components getInitialProps if it exists
      if (ComponentToRender === null) {
        return undefined;
      }

      return ComponentToRender.getInitialProps ? ComponentToRender.getInitialProps(ctx) : Promise.resolve(null);
    }

    constructor(props: Props) {
      super(props);
      this.updateState = this.updateState.bind(this);
      this.state = {
        Component: ComponentToRender
      };
    }

    UNSAFE_componentWillMount(): void {
      AsyncRouteComponent.load().then(this.updateState);
    }

    updateState(): void {
      // Only update state if we don't already have a reference to the
      // component, this prevent unnecessary renders.
      if (this.state.Component !== ComponentToRender) {
        this.setState({
          Component: ComponentToRender
        });
      }
    }

    render(): ReactNode {
      const { Component: ComponentFromState } = this.state;

      if (ComponentFromState) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <ComponentFromState {...(this.props as any)} />;
      }

      if (Placeholder) {
        return <Placeholder {...this.props} />;
      }

      return null;
    }
  };
}
