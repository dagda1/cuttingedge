import React from 'react';
import { Switch, Route, withRouter, match as Match, RouteComponentProps } from 'react-router-dom';
import { loadInitialProps } from './loadInitialProps';
import { History, Location } from 'history';
import { AsyncRouteProps, LayoutComponent, LayoutProps } from './types';

export interface AfterpartyProps extends RouteComponentProps<any> {
  history: History;
  location: Location;
  data?: Promise<any>[];
  routes: AsyncRouteProps[];
  match: Match<any>;
  Layout?: LayoutComponent;
}

export interface AfterpartyState {
  data?: Promise<any>[];
  previousLocation: Location | null;
}

type Props = AfterpartyProps;

class Afterparty extends React.Component<Props, AfterpartyState> {
  prefetcherCache: any;

  static defaultProps: Pick<Props, 'Layout'> = {
    Layout: ({ children }: { children: React.ReactNode }) => <>{children}</>
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      data: props.data,
      previousLocation: null
    };

    this.prefetcherCache = {};
  }

  // only runs clizzient
  componentWillReceiveProps(nextProps: AfterpartyProps) {
    const navigated = nextProps.location !== this.props.location;
    if (navigated) {
      window.scrollTo(0, 0);
      // save the location so we can render the old screen
      this.setState({
        previousLocation: this.props.location,
        data: undefined // unless you want to keep it
      });

      const { data, match, routes, history, location, staticContext, Layout, ...rest } = nextProps;

      loadInitialProps(this.props.routes, nextProps.location.pathname, {
        location: nextProps.location,
        history: nextProps.history,
        ...rest
      })
        .then(({ data }) => {
          this.setState({ previousLocation: null, data });
        })
        .catch((e) => {
          // @todo we should more cleverly handle errors???
          console.log(e);
        });
    }
  }

  prefetch = (pathname: string) => {
    loadInitialProps(this.props.routes, pathname, {
      history: this.props.history
    })
      .then(({ data }) => {
        this.prefetcherCache = {
          ...this.prefetcherCache,
          [pathname]: data
        };
      })
      .catch((e) => console.log(e));
  };

  render() {
    const { previousLocation, data } = this.state;
    const { location, Layout } = this.props;
    const initialData = this.prefetcherCache[location.pathname] || data;

    const defaultLayout = ({ children, location }: LayoutProps) => <>{children}</>;

    const FinalLayout = Layout || defaultLayout;

    return (
      <FinalLayout location={location}>
        <Switch>
          {this.props.routes.map((r, i) => (
            <Route
              key={`route--${i}`}
              path={r.path}
              exact={r.exact}
              location={previousLocation || location}
              render={(props) =>
                React.createElement(r.component, {
                  ...initialData,
                  history: props.history,
                  location: previousLocation || location,
                  match: props.match,
                  prefetch: this.prefetch
                })
              }
            />
          ))}
        </Switch>
      </FinalLayout>
    );
  }
}
export const After = withRouter(Afterparty);
