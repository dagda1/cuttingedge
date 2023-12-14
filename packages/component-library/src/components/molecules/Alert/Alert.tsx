import type { ReactNode } from 'react';
import cs from 'classnames';
import * as styles from './Alert.css.js';
import { capitalize } from '@cutting/util';
import { Heading } from '~/components/atoms/Heading/Heading';
import { Text } from '~/components/atoms/Text/Text';
import { Stack } from '../Stack/Stack';

export type AlertType = 'success' | 'warning' | 'error';

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
        <Heading level="2" id="notification-banner-title">
          {title}
        </Heading>
      </div>
      <div className={styles.bannerContent}>
        <Stack space="small">
          <Text weight="regular" component="p">
            {bannerHeading}
          </Text>
          <Text weight="regular">{children}</Text>
        </Stack>
      </div>
    </div>
  );
}
