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
        <Box>
          <Heading level="1" weight="regular">
            I make slow sites fast
          </Heading>
          <Box marginY="xxxlarge">
            <Text component="p" size="large">
              I find what&apos;s slowing you down and fix it. You get faster pages, fewer bounces, and more sales.
            </Text>
          </Box>
          <Box marginBottom="xxxlarge">
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
              <ul className={styles.serviceCardList}>
                <li>Identify bloat</li>
                <li>Find the worst images</li>
                <li>Identify layout shift</li>
                <li>Find slow third-party scripts</li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceCardTitle}>Fix it</h3>
              <ul className={styles.serviceCardList}>
                <li>Prioritize what matters most</li>
                <li>Hit Google&apos;s speed targets</li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceCardTitle}>The proof</h3>
              <ul className={styles.serviceCardList}>
                <li>Before and after metrics</li>
                <li>If it&apos;s not faster, you don&apos;t pay</li>
              </ul>
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
