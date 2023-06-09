import { ApplicationLayout } from '~/layouts/ApplicationLayout';
import * as Urls from '~/urls';

import * as styles from './CV.css';
import { Box, TextLink } from '@cutting/component-library';

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
    <ApplicationLayout display="flex">
      <Box display={{ mobile: 'block', desktop: 'flex' }} justifyContent="spaceBetween" marginBottom="medium">
        {docs.map((doc) => {
          const text = `DOWNLOAD ${doc.text}`;
          return (
            <TextLink href={doc.url} size="large" key={doc.url}>
              {text}
            </TextLink>
          );
        })}
      </Box>
      <iframe className={styles.pdfViewer} title="CV" src={viewerUrl} />
    </ApplicationLayout>
  );
}

export default CV;
