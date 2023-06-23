import * as styles from './Clients.css';
import { PageLayout } from '../Layouts/PageLayout';
import cs from 'classnames';
import { Twentysix } from './Twentysix';
import { getImageSrc } from '../../util/image';

const Images = [
  { logo: '/disclosure.svg', alt: 'Disclosure Scotland' },
  { logo: '/waitrose.svg', alt: 'Waitrose' },
  { logo: '/lloyds_bank_logo.jpeg', alt: 'Lloyds Bank' },
  { logo: '/volvo-ocean-race-logo.png', alt: 'Volvo Ocean Race' },
  { logo: '/continuity2.jpeg', alt: 'Continuity2' },
] as const;

export function Client({ pkg }: { pkg: (typeof Images)[number] }): JSX.Element {
  return (
    <div className={styles.client}>
      <img alt={pkg.alt} src={getImageSrc(pkg.logo)} />
    </div>
  );
}

export function Clients(): JSX.Element {
  return (
    <PageLayout
      heading="Having worked with the following clients, you can trust us to get the job done"
      className={cs(styles.main)}
    >
      <div className={styles.images}>
        {Images.map((X, i) => (
          <Client key={i} pkg={X} />
        ))}
        <div className={cs(styles.client, styles.svg)}>
          <Twentysix />
        </div>
      </div>
    </PageLayout>
  );
}
