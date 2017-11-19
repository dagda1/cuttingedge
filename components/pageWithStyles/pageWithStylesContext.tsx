import * as React from 'react';

export class WithStylesContextProps {
  onInsertCss: Function;
}

export class WithStylesContext extends React.Component<WithStylesContextProps, any> {
  static childContextTypes = {
    insertCss: Function
  };

  getChildContext() {
    return { insertCss: this.props.onInsertCss };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}
