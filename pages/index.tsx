import type { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'

import AvatarGenerate from '../utils/AvatarGenerate'

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
        <link rel="canonical" href="https://1x3.studio" />
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
        <header>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.075, 0.82, 0.165, 1] }}
            className="grid gap-4"
          >
            <h1 className="font-serif text-3xl font-semibold">
              1X3 Dev Studio
            </h1>
            <p className="text-sm text-grayText">
              A tiny development studio focusing on beautifully crafted visual
              design for web applications.
            </p>
            <div className="flex">
              <a
                href="mailto:hello@arikko.dev?subject=Project%20inquiry!"
                target="_blank"
                rel="noreferrer noopener"
                className="group transition-all hover:text-indigo-600"
              >
                <span className="flex items-center gap-2 text-sm font-semibold">
                  <span className="h-3 w-3 rounded-md bg-black transition-all group-hover:bg-indigo-600" />
                  Next availability: June 2022
                </span>
              </a>
            </div>
          </motion.div>
        </header>

        <section>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3, ease: [0.075, 0.82, 0.165, 1] }}
          >
            <h2 className="text-xs font-semibold text-grayText">
              Currently building
            </h2>
            <ul className="divide-y divide-black/[0.08]">
              <li className="py-6">
                <div className="flex items-center gap-6">
                  <figure className="relative before:absolute before:-z-10 before:h-full before:w-full before:bg-gradient-to-r before:from-[#06F9C4] before:to-[#C406F9] before:blur-lg">
                    <AvatarGenerate
                      name="Sentient"
                      className="h-8 w-8 rounded-2xl"
                    />
                  </figure>
                  <p className="text-sm">
                    <span>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://sentient.dev"
                        className="font-semibold hover:text-indigo-600"
                      >
                        Sentient
                      </a>
                    </span>
                    <span> </span>
                    <span className="text-grayText">
                      — Decentralized, DApp, and free.
                    </span>
                  </p>
                </div>
              </li>
              <li className="py-6 pb-0">
                <div className="flex items-start gap-6">
                  <figure className="relative before:absolute before:-z-10 before:h-full before:w-full before:bg-gradient-to-r before:from-[#c806f9] before:to-[#f9c806] before:blur-lg">
                    <AvatarGenerate
                      name="Sendy"
                      className="h-8 w-8 rounded-2xl"
                    />
                  </figure>
                  <p className="text-sm">
                    <span>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://sendy.dev"
                        className="font-semibold hover:text-indigo-600"
                      >
                        Sendy
                      </a>
                    </span>
                    <span> </span>
                    <span className="text-grayText">
                      — Free, "sent any amount to any account". New features
                      will be adding every month.
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </section>

        <footer>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 * 2, ease: [0.075, 0.82, 0.165, 1] }}
          >
            <a
              href="https://twitter.com/ImArikChakma"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="hover:shadow-inside rounded-md bg-black px-3 py-2 font-medium text-background transition-all duration-200 hover:bg-indigo-600 hover:drop-shadow-lg">
                Let's talk
              </button>
            </a>
          </motion.div>
        </footer>
      </main>
    </div>
  )
}

export default Home
