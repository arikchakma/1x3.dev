import { motion } from 'framer-motion';
import ProjectCard from './cards/ProjectCard';

export default function Projects() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          ease: [0.075, 0.82, 0.165, 1]
        }}
      >
        <h2 className="text-xs font-semibold text-grayText">
          Currently building
        </h2>
        <ul className="divide-y divide-bgDark/[0.08]">
          <li className="py-6">
            <ProjectCard
              name="Sentient"
              description={`Decentralized, DApp, and free.`}
              url="https://sentient.arikko.dev"
              className="before-gradient before:from-[#06F9C4] before:to-[#C406F9]"
            />
          </li>
          <li className="py-6 pb-0">
            <ProjectCard
              name="Sendy"
              description={`Free, &quot;sent any amount to any account&quot;. New features will be adding every month.`}
              url="https://sendy.arikko.dev"
              className="before-gradient before:from-[#c806f9] before:to-[#f9c806]"
            />
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
