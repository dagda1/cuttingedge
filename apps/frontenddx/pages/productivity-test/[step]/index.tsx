import { useRouter } from 'next/router';
import * as styles from '../../../styles/ProductivityTest.css';
import { Navigator } from '../../../components/Navigator/Navigator';
import { FullPageLayout } from '../../../components/Layouts/FullPageLayout';
import cs from 'classnames';
import { pushDown } from '../../../styles/utilities.css';
import { Intro } from './Intro';
import { LinkWrapper } from '../../../components/LinkWrapper/LinkWrapper';
import { Communication } from './Communication';
import { Bugs } from './Bugs';
import { Build } from './Build';
import { Testing } from './Testing';
import { Development } from './Development';
import Report from './Report';
import type { FunctionComponent } from 'react';
import type { StepComponent } from '../../../types';

export interface Step {
  title: string;
  Component: FunctionComponent<StepComponent>;
}

const steps: Step[] = [
  {
    title: 'Frontend Productivity Healthcheck',
    Component: Intro,
  },
  {
    title: 'Build and Deployment',
    Component: Build,
  },
  {
    title: 'Bug tracking and resolution',
    Component: Bugs,
  },
  {
    title: 'Testing',
    Component: Testing,
  },
  {
    title: 'Developer Experience',
    Component: Development,
  },
  {
    title: 'Communication',
    Component: Communication,
  },
  {
    title: 'Results',
    Component: Report,
  },
];

export default function ProductivityTest(): JSX.Element {
  const router = useRouter();
  const step = Number(router.query.step);

  const current = steps[step - 1];

  if (typeof current === 'undefined') {
    return <div>...loading</div>;
  }

  const isIntro = step === 1;

  const pageTitle = [steps[0].title, steps.slice(-1)[0].title].includes(current.title)
    ? current.title
    : `${step - 1}. ${current.title}`;

  const nextPage = step === steps.length ? undefined : `/productivity-test/${step + 1}`;

  return (
    <FullPageLayout heading={pageTitle} className={cs(styles.root, pushDown)}>
      <div className={styles.container}>
        <current.Component nextPage={nextPage}>
          <div>
            {isIntro ? (
              <div className={styles.start}>
                <LinkWrapper linkType="button" buttonStyle="primary" href="/productivity-test/2">
                  START
                </LinkWrapper>
              </div>
            ) : (
              <Navigator steps={steps.length} />
            )}
          </div>
        </current.Component>
      </div>
    </FullPageLayout>
  );
}
