/* eslint-disable no-console */
import React from 'react';
import { Switch, Route, withRouter, match as Match, RouteComponentProps } from 'react-router-dom';
import { loadInitialProps } from './loadInitialProps';
import { History, Location } from 'history';
import { AsyncRouteProps } from './types';

export interface AfterpartyProps<TData = {}, TParams = unknown> extends RouteComponentProps<TParams> {
  history: History;
  location: Location;
  data?: Promise<TData>[];
  routes: AsyncRouteProps[];
  match: Match<TParams>;
}

export interface AfterpartyState<TData = {}> {
  data?: Promise<TData>[];
  previousLocation: Location | null;
}

type Props<TData, TParams> = AfterpartyProps<TData, TParams>;

class Afterparty<TData = {}, TParams = unknown> extends React.Component<Props<TData, TParams>, AfterpartyState> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prefetcherCache: any;

  constructor(props: Props<TData, TParams>) {
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

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data, match, routes, history, location, staticContext, ...rest } = nextProps;

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
    const { location } = this.props;
    const initialData = this.prefetcherCache[location.pathname] || data;

    return (
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
    );
  }
}
export const After = withRouter(Afterparty);
