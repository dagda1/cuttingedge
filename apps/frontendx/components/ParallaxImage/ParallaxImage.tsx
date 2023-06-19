import cs from 'classnames';
import { getImageSrc } from '../../util/image';
import * as styles from './ParallaxImage.css';

export function ParallaxImage({ alt, src, className }: { src: string; alt: string; className?: string }): JSX.Element {
  return (
    <div className="container">
      <div className={cs(styles.imgBox, 'jarallax', className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={alt} className="jarallax-img" src={getImageSrc(src)} />
      </div>
    </div>
  );
}
