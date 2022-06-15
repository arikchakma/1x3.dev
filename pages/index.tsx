import type { NextPage } from 'next';
import Head from 'next/head';

import Projects from '../components/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>1X3 Development Studio</title>
        <meta name="robots" content="follow, index" />
        <meta
          content="A tiny development studio focusing on beautifully crafted visual design for web applications."
          name="description"
        />
        <meta
          name="keywords"
          content="1X3, OneXThree Studio, Development Studio"
        />
        <meta property="og:url" content="https://1x3.studio" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Arik Chakma" />
        <meta
          property="og:description"
          content="A tiny development studio focusing on beautifully crafted visual design for web applications."
        />
        <meta property="og:title" content="1X3 Development Studio" />
        <meta
          property="og:image"
          content="https://1x3.studio/static/images/banner.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@imarikchakma" />
        <meta name="twitter:title" content="1X3 Development Studio" />
        <meta
          name="twitter:description"
          content="A tiny development studio focusing on beautifully crafted visual design for web applications."
        />
        <meta
          name="twitter:image"
          content="https://1x3.studio/static/images/banner.png"
        />
      </Head>

      <main className="flex max-w-md flex-col gap-10">
        <Header />
        <Projects />
        <Footer />

        <div className="masking-pattern absolute inset-0 -z-10 h-full w-full bg-[url(/static/images/patterns/grid.svg)] bg-center" />
      </main>
    </div>
  );
};

export default Home;
