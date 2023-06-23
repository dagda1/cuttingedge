import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import { CDN } from '../../constants';

export function VideoPlayer({ file }: { file: string }): JSX.Element {
  return (
    <Plyr
      source={{
        type: 'video',
        sources: [{ src: `${CDN}/videos/${file}` }],
      }}
    />
  );
}
