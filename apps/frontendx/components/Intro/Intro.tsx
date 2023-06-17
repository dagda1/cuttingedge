import { Scroller } from '../Scroller/Scroller';
import FadeIn from 'react-fade-in';
import * as styles from './Intro.css';
import { useRef } from 'react';
import cs from 'classnames';
import { useTyped } from '../../hooks/useTyped/useTyped';
import { useJarallax } from '../../hooks/useJarallax/useJarallax';
import { FullPageLayout } from '../Layouts/FullPageLayout';

export function Intro(): JSX.Element {
  const heading = useRef<HTMLSpanElement>(null);

  useJarallax();
  useTyped([`Our frontend productivity roadmap can fix this`], heading);

  return (
    <FullPageLayout className={cs(styles.main, styles.fullHeight)}>
      <div className={styles.container}>
        <h1>Are your frontend developers taking forever to ship quality features?</h1>
        <h2>
          <span ref={heading}></span>
        </h2>
        <FadeIn delay={1700} transitionDuration={1000}>
          <Scroller />
        </FadeIn>
      </div>
    </FullPageLayout>
  );
}
