import { ApplicationLayout } from '~/layouts/ApplicationLayout';
import * as Urls from '~/urls';

import * as styles from './CV.css.js';
import { Tiles, TextLink, PageBlock, Text } from '@cutting/component-library';

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
    <ApplicationLayout>
      <PageBlock>
        <Tiles space={{ mobile: 'small', tablet: 'large' }} columns={{ mobile: 1, tablet: 2 }}>
          {docs.map((doc) => {
            const text = `DOWNLOAD ${doc.text}`;
            return (
              <Text size="large" key={doc.url}>
                <TextLink href={doc.url}>{text}</TextLink>
              </Text>
            );
          })}
        </Tiles>
        <iframe className={styles.pdfViewer} title="CV" src={viewerUrl} />
      </PageBlock>
    </ApplicationLayout>
  );
}

export default CV;
