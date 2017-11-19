import * as React from 'react';

export type ComponentType<T> = React.StatelessComponent<T> | React.ComponentClass<T>;

export interface PageWithStylesProps {
  css: any[];
}

export function pageWithStyles<T>(WrappedComponent: ComponentType<T>) {
  class PageWithStyles extends React.Component<PageWithStylesProps & T> {
    static defaultName = `PageWithStyles(${WrappedComponent.displayName || 'Component'})`;

    static defaultProps = { css: [] } as any;

    getChildContext() {
      const insertCss =
        typeof window === 'undefined'
          ? (...styles: any[]) => {
              styles.forEach(style => {
                const cssText = style._getCss();
                if (!~this.props.css.indexOf(cssText)) {
                  this.props.css.push(cssText);
                }
              });
            }
          : (...styles: any[]) => {
              const removeCss = styles.map(x => x._insertCss());

              return () => {
                removeCss.forEach(f => f());
              };
            };

      return { insertCss };
    }

    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />
          <style className="_isl-styles" dangerouslySetInnerHTML={{ __html: this.props.css.join('') }} />
        </div>
      );
    }
  }

  return PageWithStyles;
}
