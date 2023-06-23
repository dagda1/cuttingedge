// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AboutContent from '../../content/about.mdx';
import { getImageSrc } from '../../util/image';
import { FullPageLayout } from '../Layouts/FullPageLayout';
import * as styles from './About.css';

export function About(): JSX.Element {
  return (
    <FullPageLayout heading="Our story">
      <>
        <div className={styles.image}>
          <img alt="Paul Cowan (CEO)" src={getImageSrc('/me.jpeg')} />
        </div>
        <AboutContent />
      </>
    </FullPageLayout>
  );
}
