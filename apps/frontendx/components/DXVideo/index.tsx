import * as styles from './DXVideo.css';
import { FullPageLayout } from '../Layouts/FullPageLayout';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { ContactButtons } from '../Intro/ContactButtons';

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
      <h2>{title}</h2>
      <VideoPlayer file={video} />
      <ContactButtons callType="chat" />
    </FullPageLayout>
  );
}
