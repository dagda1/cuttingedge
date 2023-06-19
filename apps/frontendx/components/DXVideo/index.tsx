import * as styles from './DXVideo.css';
import { FullPageLayout } from '../Layouts/FullPageLayout';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { ContactButtons } from '../Intro/ContactButtons';
import { Heading } from '@cutting/component-library';

export default function DXVideo({
  heading,
  title = 'please press play below',
  video,
}: {
  heading: string;
  title?: string;
  video: 'DX1.mp4' | 'DX_no_intro.mp4';
}): JSX.Element {
  return (
    <FullPageLayout heading={heading} className={styles.main}>
      <Heading level="2">{title}</Heading>
      <VideoPlayer file={video} />
      <ContactButtons callType="chat" />
    </FullPageLayout>
  );
}
