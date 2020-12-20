import type { FC } from 'react';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import * as Urls from '../../urls';

import styles from './CV.module.scss';

// eslint:disable
export const CV: FC = () => {
  const CVFile = 'paulcowan-cv.pdf';

  const pdfUrl = ['', 'assets', CVFile].join('/');

  const viewerUrl = `/pdfjs/web/viewer.html?file=${pdfUrl}&fileName=${CVFile}&openFile=true&download=true&viewBookmark=true`;

  return (
    <ApplicationLayout className={styles.main} heading="Paul Cowan CV">
      <div className={styles['pdf-viewer']}>
        <h1>
          <a className={styles.link} href={Urls.Download}>
            <span>CLICK HERE TO DOWNLOAD MY CV (pdf)</span>
          </a>
        </h1>
        <iframe title="CV" src={viewerUrl} />
      </div>
    </ApplicationLayout>
  );
};

export default CV;
