import { Scroller } from '../../components/Scroller/Scroller';
import * as styles from './Home.css';

export function Home(): JSX.Element {
  return (
    <div className={styles.home}>
      <section className={styles.hero} style={{ position: 'relative' }}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Make your key pages load faster, feel snappier, and stop jumping around</h1>
          <p className={styles.heroSubtitle}>
            I run a 7-day performance sprint for React/Next sites—audit, implement the highest-impact fixes, and share
            before/after results
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Get Started
          </a>
        </div>
        <Scroller />
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
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
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to speed up your site?</h2>
          <p className={styles.ctaSubtitle}>Let&apos;s talk about your performance goals</p>
          <a href="/contact" className={styles.ctaButton}>
            Schedule a Call
          </a>
        </div>
      </section>
    </div>
  );
}
