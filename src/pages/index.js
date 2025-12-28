import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.tagline" description="The tagline of the homepage">
            Built to stay out of your way.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            <Translate id="homepage.getStarted" description="The Get Started button on the homepage">
              Get Started 🐶
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageScreenshot() {
  return (
    <section className={styles.screenshotSection}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center">
            <Heading as="h2">
              <Translate id="homepage.screenshotTitle">
                Beautiful, Stable, and Familiar
              </Translate>
            </Heading>
            <p className="margin-bottom--lg">
              <Translate id="homepage.screenshotSubtitle">
                A clean KDE Plasma experience powered by the rock-solid Debian base.
              </Translate>
            </p>
            <img
              src="/img/desktop-screenshot.png"
              alt="GoldenDog Linux Desktop"
              className={styles.desktopScreenshot}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CockpitSection() {
  return (
    <section className={clsx(styles.cockpitSection, 'padding-vert--xl')}>
      <div className="container">
        <div className="row row--align-center">
          <div className="col col--6">
            <Heading as="h2">
              <Translate id="homepage.cockpitTitle">
                Management Made Easy
              </Translate>
            </Heading>
            <p>
              <Translate id="homepage.cockpitDesc">
                GoldenDog Linux comes pre-configured with Cockpit, giving you a powerful web-based interface to manage your system, monitor performance, and handle updates with zero effort.
              </Translate>
            </p>
            <Link
              className="button button--secondary button--lg"
              to="/docs/tweaking-goldendog/web-console">
              <Translate id="homepage.learnMore">
                Learn More
              </Translate>
            </Link>
          </div>
          <div className="col col--6">
            <div className={styles.cockpitImageGrid}>
              <img
                src="/img/cockpit-login.png"
                alt="Cockpit Login"
                className={styles.cockpitImageSmall}
              />
              <img
                src="/img/cockpit-dashboard.png"
                alt="Cockpit Dashboard"
                className={styles.cockpitImageLarge}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: `Hello from ${siteConfig.title}`,
        description: 'The title of the homepage',
      })}
      description={translate({
        id: 'homepage.description',
        message: 'A stable, KDE-based distribution for every user.',
        description: 'The description of the homepage',
      })}>
      <HomepageHeader />
      <main className={styles.mainBackground}>
        <HomepageScreenshot />
        <CockpitSection />
        <HomepageFeatures />
      </main>

    </Layout>
  );
}
