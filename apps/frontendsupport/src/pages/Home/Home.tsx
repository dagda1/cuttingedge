import { Box, Heading, Text } from '@cutting/component-library';

import { ContactButtons } from '~/components/Contact/ContactButtons';
import Testimonials from '~/routes/testimonials';

import { Scroller } from '../../components/Scroller/Scroller';
import * as styles from './Home.css';

export function Home(): JSX.Element {
  return (
    <Box className={styles.home}>
      <Box
        height="screen"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        textAlign="center"
        marginY="xxxlarge"
      >
        <Box marginBottom="xxxlarge">
          <Heading level="1" weight="regular">
            Make your key pages load faster, feel snappier, and stop jumping around
          </Heading>
          <Box marginY="xxxlarge">
            <Text component="p" size="large">
              I run a 7-day performance sprint for React/Next/SPAs where I audit your key pages, implement the
              highest-impact fixes, and send a clear before/after report.
            </Text>
          </Box>
          <ContactButtons justify="center" />
          <Scroller />
        </Box>
      </Box>

      <Box marginBottom="xxxlarge" paddingBottom="xxxlarge">
        <div>
          <h2 className={styles.sectionTitle}>What I Do</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceCardTitle}>Performance Audit</h3>
              <p className={styles.serviceCardText}>
                Identify bottlenecks, measure Core Web Vitals, and prioritize fixes by impact
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceCardTitle}>Implementation</h3>
              <p className={styles.serviceCardText}>
                Ship the highest-impact optimizations: code splitting, lazy loading, image optimization
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceCardTitle}>Results &amp; Handoff</h3>
              <p className={styles.serviceCardText}>
                Before/after metrics, documentation, and recommendations for ongoing performance
              </p>
            </div>
          </div>
        </div>
      </Box>

      <section className={styles.ctaSection}>
        <div>
          <h2 className={styles.ctaTitle}>Ready to speed up your site?</h2>
          <p className={styles.ctaSubtitle}>Let&apos;s talk about your performance goals</p>
          <ContactButtons justify="center" />
          <Scroller />
        </div>
      </section>
      <Testimonials />
    </Box>
  );
}
