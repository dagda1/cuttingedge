import * as styles from './Scroller.css';
import cs from 'classnames';
import { Image } from '@unpic/react';

export function Scroller(): JSX.Element {
  return (
    <div className={cs('scroller', styles.scroller)}>
      <div className={styles.arrow}>
        <Image
          src="https://res.cloudinary.com/ddospxsc8/image/upload/v1689953388/frontendsupport/arrowdown_hqckwt.png"
          layout="constrained"
          width={100}
          height={100}
          alt="Scroller"
          loading="eager"
        />
      </div>
    </div>
  );
}
