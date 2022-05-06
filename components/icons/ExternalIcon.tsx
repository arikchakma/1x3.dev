import { motion } from 'framer-motion';

const icon = {
  hidden: {
    pathLength: 0
  },
  visible: {
    pathLength: 1
  }
};

export default function ExternalIcon({
  className,
  pathClassName
}: {
  className?: string;
  pathClassName?: string;
}) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
    >
      <motion.path
        className={pathClassName}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 1, ease: 'easeInOut', delay: 0.3 },
          fill: { duration: 0.5, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
  );
}
