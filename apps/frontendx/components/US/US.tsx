import * as styles from './US.css';
import { PageLayout } from '../Layouts/PageLayout';
import cs from 'classnames';
import { getImageSrc } from '../../util/image';

const Images = [
  { img: '/react.svg', alt: 'react' },
  { img: '/graphql3.svg', alt: 'graphql' },
  { img: '/typescript.svg', alt: 'typescript' },
  { img: '/eslint.svg', alt: 'eslint' },
  { img: '/git2.svg', alt: 'git' },
  { img: '/webpack-icon.svg', alt: 'svg' },
];

function Packages({ packages, className }: { packages: typeof Images; className?: string }): JSX.Element {
  return (
    <div className={cs(styles.images, className)}>
      {packages.slice(0, 3).map((img, i) => (
        <div className={styles.image} key={i}>
          <img alt={img.alt} src={getImageSrc(img.img)} />
        </div>
      ))}
    </div>
  );
}

export function US(): JSX.Element {
  return (
    <PageLayout className={styles.main}>
      <Packages packages={Images.slice(0, 3)} className={styles.topImages} />
      <div className={styles.heading}>
        <h1>We are the frontend experts you need to get your frontend team operating like a well-oiled machine</h1>
      </div>
      <Packages packages={Images.slice(3)} className={styles.bottomImages} />
    </PageLayout>
  );
}
