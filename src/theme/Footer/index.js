import React from 'react';
import Footer from '@theme-original/Footer';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function FooterWrapper(props) {
  return (
    <>
      <div className="sponsor-banner-wrapper">
        <Link
          href="https://shrug.host"
          className="sponsor-banner-link"
          aria-label="Powered by Shrug.host"
        >
          <ThemedImage
            alt="Powered by Shrug.host"
            className="sponsor-banner-img"
            sources={{
              light: useBaseUrl('/img/shrug-host-dark.svg'),
              dark: useBaseUrl('/img/shrug-host-light.svg'),
            }}
          />
        </Link>
      </div>
      <Footer {...props} />
    </>
  );
}
