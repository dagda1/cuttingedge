import React from 'react';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import * as Urls from '../../urls';

const styles = require('./CV.scss');

// eslint:disable
export const CV: React.FunctionComponent = () => {
  const CVFile = 'paulcowan-cv.pdf';

  const pdfUrl = ['', 'assets', CVFile].join('/');

  const viewerUrl = `/pdfjs/web/viewer.html?file=${pdfUrl}&fileName=${CVFile}&openFile=true&download=true&viewBookmark=true`;

  return (
    <ApplicationLayout className={styles.main}>
      <div className={styles['pdf-viewer']}>
        <h1>
          <a className={styles.link} href={Urls.Download}>
            <span>CLICK HERE TO DOWNLOAD CV (pdf)</span>
          </a>
        </h1>
        <iframe src={viewerUrl} />
      </div>
    </ApplicationLayout>
  );
};
