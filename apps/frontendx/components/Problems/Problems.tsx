import { PageLayout } from '../Layouts/PageLayout';
import * as styles from './Problems.css';
import { useJarallax } from '../../hooks/useJarallax/useJarallax';
import { ParallaxImage } from '../ParallaxImage/ParallaxImage';

export function Problem({
  text,
  img: { src, alt },
}: {
  text: string;
  img: { src: string; alt?: string };
}): JSX.Element {
  return (
    <div>
      <div className="box">
        <h2 className={styles.heading}>{text}</h2>

        <ParallaxImage alt={alt ?? text} src={src} />
      </div>
    </div>
  );
}

export function Problems(): JSX.Element {
  useJarallax();

  return (
    <PageLayout className={styles.main} heading="Are your developers.....">
      <Problem text="Missing deadlines" img={{ src: '/fatigue2.jpeg' }} />
      <Problem text="Firefighting bugs in production" img={{ src: '/problems.jpg' }} />
      <Problem text="Shipping poorly performing code" img={{ src: '/slowjpg.jpeg' }} />
      <Problem text="Heading for the exit door" img={{ src: '/resignation.jpg' }} />
      <h1 className={styles.borderedHeading}>
        What if your frontend team could develop quality features in half the time?
      </h1>
    </PageLayout>
  );
}
