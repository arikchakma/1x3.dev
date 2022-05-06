import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.3 * 2,
          ease: [0.075, 0.82, 0.165, 1]
        }}
      >
        <a
          href="https://twitter.com/ImArikChakma"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button className="hover:shadow-inside rounded-md bg-black px-3 py-2 font-medium text-background transition-all duration-200 hover:bg-indigo-600 hover:drop-shadow-lg">
            Let&apos;s talk
          </button>
        </a>
      </motion.div>
    </footer>
  );
}
