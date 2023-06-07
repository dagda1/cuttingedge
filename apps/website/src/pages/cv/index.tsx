import { ApplicationLayout } from '~/layouts/ApplicationLayout';
import * as Urls from '~/urls';

import * as styles from './CV.css';
import { Text } from '@cutting/component-library';

const docs = [
  { file: 'paulcowan-cv.pdf', url: Urls.DownloadPdf, text: 'pdf' },
  { file: 'paulcowan-cv.docx', url: Urls.DownloadWordDoc, text: 'word (.docx)' },
] as const;

// eslint:disable
export function CV(): JSX.Element {
  const CVFile = 'paulcowan-cv.pdf';

  const pdfUrl = ['', 'assets', CVFile].join('/');

  const viewerUrl = `/pdfjs/web/viewer.html?file=${pdfUrl}&fileName=${CVFile}&openFile=true&download=true&viewBookmark=true`;

  return (
    <ApplicationLayout className={styles.main}>
      <section className={styles.pdfViewer}>
        {docs.map((doc) => (
          <h2 key={doc.file}>
            <a className={styles.link} href={doc.url}>
              <Text component="span">DOWNLOAD {doc.text}</Text>
            </a>
          </h2>
        ))}
      </section>
      <iframe title="CV" src={viewerUrl} />
    </ApplicationLayout>
  );
}

export default CV;
