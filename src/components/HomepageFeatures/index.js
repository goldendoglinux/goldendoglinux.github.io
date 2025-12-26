import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Good Boy Performance',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        GoldenDog Linux is optimized for speed and stability, ensuring your
        system stays fast and reliable under any workload.
      </>
    ),
  },
  {
    title: 'Community Driven',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Built by the community, for the community. GoldenDog is a pack where
        everyone is welcome to contribute and grow.
      </>
    ),
  },
  {
    title: 'Modern & Accessible',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We leverage modern technologies to provide an accessible and friendly
        experience for both newcomers and power users.
      </>
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
