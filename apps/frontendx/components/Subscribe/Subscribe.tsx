import { SignupForm } from '../SignupForm/SignupForm';
import * as styles from './Subscribe.css';
import cs from 'classnames';
import { FullPageLayout } from '../Layouts/FullPageLayout';

export function Subscribe(): JSX.Element {
  return (
    <FullPageLayout
      heading="Receive weekly emails that will revolutionise how you deliver frontend features"
      className={cs(styles.container)}
    >
      <section className={styles.benefits}>
        <div>
          <h2>Supercharge your development environment</h2>
          <div>
            Learn the techniques that industry experts use to take the pain out of delivering frontend features.
          </div>
        </div>
        <div>
          <h2>Learn how problems are fixed</h2>
          <div>
            We are always looking for new ways to flex our DX muscles, and we will fix and showcase any user-submitted
            question that covers new ground. We also monitor user forums and will fix any challenges that we deem
            worthy.
          </div>
        </div>
        <div>
          <h2>Stay current</h2>
          <div>Let us keep abreast of all the latest frontend development tooling so you don&apos;t have to.</div>
        </div>
      </section>
      <div className={styles.form}>
        <SignupForm />
      </div>
    </FullPageLayout>
  );
}
