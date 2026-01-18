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
            I fix frontend messes
          </Heading>
          <Box marginY="xxxlarge">
            <Text component="p" size="large">
              AI-generated or otherwise.
            </Text>
          </Box>
          <Box marginBottom="xxxlarge">
            <Heading level="2">If I don&apos;t fix it, you don&apos;t pay.</Heading>
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
                <li>Audit your codebase</li>
                <li>Identify duplication and technical debt</li>
                <li>Map what&apos;s slowing your team down</li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceCardTitle}>Fix it</h3>
              <ul className={styles.serviceCardList}>
                <li>Remove duplication (DRY)</li>
                <li>Set up foundations that scale</li>
                <li>Remove what shouldn&apos;t be there</li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceCardTitle}>The proof</h3>
              <ul className={styles.serviceCardList}>
                <li>Your team moves faster</li>
                <li>If it&apos;s not better, you don&apos;t pay</li>
              </ul>
            </div>
          </div>
        </div>
      </Box>

      <section className={styles.ctaSection}>
        <div>
          <h2 className={styles.ctaTitle}>Ready to fix the mess?</h2>
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
