import type { PageLayoutProps } from './PageLayout';
import { PageLayout } from './PageLayout';
import { expand, pushDown } from '../../styles/utilities.css';
import { useEffect } from 'react';
import cs from 'classnames';
import * as styles from './PageLayout.css';

export function FullPageLayout({ className, ...props }: PageLayoutProps): JSX.Element {
  useEffect(() => {
    if (!document) {
      return;
    }

    document.querySelector('#__next')?.classList.add(expand);

    return () => {
      document.querySelector('#__next')?.classList.remove(expand);
    };
  }, []);

  return <PageLayout {...props} className={cs(styles.main, pushDown, className)} />;
}
