import { motion } from 'framer-motion';

import projectsData from '../data/projectsData';
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

        <ProjectLayout />
      </motion.div>
    </section>
  );
}

function ProjectLayout() {
  return (
    <ul className="divide-y divide-bgDark/[0.08]">
      {projectsData.map(project => (
        <li className="py-6 last:pb-0" key={project.name}>
          <ProjectCard
            name={project.name}
            description={project.description}
            url={project.url}
          />
        </li>
      ))}
    </ul>
  );
}
