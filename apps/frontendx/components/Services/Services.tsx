import { PageLayout } from '../Layouts/PageLayout';
import * as styles from './Services.css';
import cs from 'classnames';
import { useJarallax } from '../../hooks/useJarallax/useJarallax';
import type { ServiceLinkProps } from './ServiceLink';
import { ServiceLink } from './ServiceLink';
import Link from 'next/link';
import { Heading } from '@cutting/component-library';
import { Text } from '@cutting/component-library';

const services: ServiceLinkProps[] = [
  {
    title: 'Productivity roadmap',
    callType: 'frontend-productivity-transformation',
    children: (
      <>
        <Heading level="3">For team&apos;s struggling to ship frontend features</Heading>
        <Text component="p">What&apos;s included</Text>
        <ul>
          <li>An audit of your team&apos;s current practices</li>
          <li>A playback of our findings and the specific areas where we can boost productivity.</li>
          <li>A detailed productivity roadmap and an itemised checklist to monitor progress.</li>
        </ul>
        <Text component="p">
          Try our <Link href="/productivity-test/1">mini frontend productivity healthcheck</Link> to see examples and
          solutions of what we look for.
        </Text>
      </>
    ),
  },
  {
    title: 'Strategy consultation',
    callType: 'frontend-strategy-consult',
    children: (
      <>
        <Heading level="3">For a specific problem or query</Heading>
        <Text component="p">What&apos;s included</Text>
        <ul>
          <li>A 60-minute consultation call with an industry expert.</li>
          <li>A solution document within 48 hours with bulleted action items to achieve the desired result.</li>
          <li>Two weeks of email support</li>
        </ul>
        <Text component="p">
          Break the emergency glass and speak to us. We have the experience and the expertise to turn this around.
        </Text>
      </>
    ),
  },
];

export function Services(): JSX.Element {
  useJarallax();

  return (
    <PageLayout className={cs(styles.main)}>
      <div className={styles.introEnd}>
        <Heading level="1">Work with us</Heading>
        <div className={styles.container}>
          {services.map((service) => (
            <ServiceLink key={service.title} {...service} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
