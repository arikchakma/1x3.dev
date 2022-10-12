import { motion } from 'framer-motion';

import LogoAnimation from './animation/LogoAnimation';

export default function Header() {
  return (
    <header>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid gap-4"
      >
        <h1 className="font-serif text-3xl font-semibold">1X3 Dev Studio</h1>
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
              {/* <span className="h-3 w-3 rounded-md bg-black transition-all group-hover:bg-indigo-600" /> */}
              <LogoAnimation
                className="h-3 w-3 transition-all group-hover:stroke-indigo-600"
                pathClassName="group-hover:fill-indigo-600 transition-all"
              />
              {/* Next availability: June 2022 */}
              Available for new projects
            </span>
          </a>
        </div>
      </motion.div>
    </header>
  );
}
