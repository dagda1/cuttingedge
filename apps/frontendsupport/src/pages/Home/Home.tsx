import { Box, Heading, Text } from '@cutting/component-library';

import { About } from '~/components/About/About';
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
            I make slow sites fast
          </Heading>
          <Box marginY="xxxlarge">
            <Text component="p" size="large">
              I find what&apos;s slowing you down and fix it. You get faster pages, fewer bounces, and more sales.
            </Text>
          </Box>
          <Box marginBottom="xlarge">
            <Heading level="2">If your site isn&apos;t faster, you don&apos;t pay.</Heading>
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
              <h3 className={styles.serviceCardTitle}>Find the problem</h3>
              <p className={styles.serviceCardText}>I figure out what&apos;s slowing your site down</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceCardTitle}>Fix it</h3>
              <p className={styles.serviceCardText}>I make the changes so it loads faster</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceCardTitle}>Show the results</h3>
              <p className={styles.serviceCardText}>You see the before and after</p>
            </div>
          </div>
        </div>
      </Box>

      <section className={styles.ctaSection}>
        <div>
          <h2 className={styles.ctaTitle}>Ready to speed up your site?</h2>
          <p className={styles.ctaSubtitle}>Free call to find out what&apos;s slowing you down</p>
          <ContactButtons justify="center" />
          <Scroller />
        </div>
      </section>
      <Testimonials />
      <Scroller />
      <About />
    </Box>
  );
}
