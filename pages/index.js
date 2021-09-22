import Head from 'next/head';
import HomeContent from '../components/Home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Op Coin: A free open souce currency for gamers, devlopers etc...
        </title>
        <meta
          name="description"
          content="Op Coin is a free open souce currency for gamers, devlopers etc. Get started for free..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContent />
    </div>
  );
}
