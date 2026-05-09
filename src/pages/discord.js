import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

const DISCORD_INVITE_URL = 'https://discord.gg/y9Fmy5HZMr';

export default function DiscordRedirectPage() {
  useEffect(() => {
    window.location.replace(DISCORD_INVITE_URL);
  }, []);

  return (
    <Layout title="Redirecting to Discord">
      <main className="container margin-vert--xl">
        <h1>Redirecting to Discord...</h1>
        <p>
          If you are not redirected automatically, use this link:{' '}
          <a href={DISCORD_INVITE_URL}>Join our Discord server</a>.
        </p>
      </main>
    </Layout>
  );
}
