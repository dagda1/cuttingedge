import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Location } from 'history';

export interface ScrollToTopProps<T> extends RouteComponentProps<T> {
  location: Location;
  changeHandler?: (location: string) => void;
}

export class ScrollToTopView<T> extends React.Component<ScrollToTopProps<T>> {
  focusOnElement = () => {
    const root = document.querySelector('#root') as HTMLElement;
    setTimeout(() => {
      root.focus();
    }, 100);
  };

  handleChange = () => {
    const { location, changeHandler } = this.props;

    changeHandler && changeHandler(location.pathname);
  };

  componentDidMount() {
    this.handleChange();

    this.focusOnElement();
  }

  componentDidUpdate(prevProps: ScrollToTopProps<T>) {
    if (this.props.location.hash.length || this.props.location === prevProps.location) {
      return;
    }

    this.handleChange();

    window.scrollTo(0, 0);

    this.focusOnElement();
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export default withRouter(ScrollToTopView);
