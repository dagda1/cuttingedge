import React from 'react';
import dayjs from 'dayjs';
import { ApplicationLayout } from 'src/layouts/ApplicationLayout';

import styles from './RateOfChange.module.scss';

export const RateOfChange: React.FC = () => {
  const
  return (
    <ApplicationLayout
      heading={`Covid-19 data gathered ${dayjs()
        .subtract(1, 'day')
        .format('DD/MM/YYYY')}`}
    >
      <div className={styles.container} ref={ref}>
        heel
      </div>
    </ApplicationLayout>
  );
};
