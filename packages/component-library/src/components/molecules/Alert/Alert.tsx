import type { ReactNode } from 'react';
import cs from 'classnames';
import * as styles from './Alert.css';
import { capitalize } from '@cutting/util';

export type AlertType = 'success' | 'error';

export interface AlertProps {
  type: AlertType;
  title?: ReactNode;
  bannerHeading?: ReactNode;
  children: ReactNode;
}

export function Alert({ type, title = capitalize(type), bannerHeading, children }: AlertProps): JSX.Element {
  const css = styles[type];

  return (
    <div
      className={cs(styles.banner, css)}
      role="alert"
      aria-labelledby="notification-banner-title"
      data-module="notification-banner"
      data-disable-auto-focus="true"
    >
      <div className={styles.bannerHeading}>
        <h2 className="notification-banner__title" id="notification-banner-title">
          {title}
        </h2>
      </div>
      <div className={styles.bannerContent}>
        <p className={styles.subHeading}>{bannerHeading}</p>
        <p className="govuk-body">{children}</p>
      </div>
    </div>
  );
}
