import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: (
      <Translate id="homepage.features.performance.title" description="Title for performance feature">
        Good Boy Performance
      </Translate>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate id="homepage.features.performance.description" description="Description for performance feature">
        GoldenDog Linux is optimized for speed and stability, ensuring your system stays fast and reliable under any workload.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.community.title" description="Title for community feature">
        Community Driven
      </Translate>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate id="homepage.features.community.description" description="Description for community feature">
        Built by the community, for the community. GoldenDog is a pack where everyone is welcome to contribute and grow.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.modern.title" description="Title for modern feature">
        Modern & Accessible
      </Translate>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate id="homepage.features.modern.description" description="Description for modern feature">
        GoldenDog gets the best out of Debian Stable and uses official Debian repositories to provide a modern, accessible, and rock-solid experience.
      </Translate>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={styles.featureCard}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <div key={idx} className="col col--4" style={{ marginBottom: '2rem' }}>
              <Feature {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
