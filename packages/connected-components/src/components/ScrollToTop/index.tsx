import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Location } from 'history';

export interface ScrollToTopProps extends RouteComponentProps<any> {
  location: Location;
  changeHandler?: (location: string) => any;
}

export class ScrollToTopView extends React.Component<ScrollToTopProps> {
  focusOnElement = () => {
    const root = document.querySelector('#root') as any;
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

  componentDidUpdate(prevProps: ScrollToTopProps) {
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
