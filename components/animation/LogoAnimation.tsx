import { motion } from 'framer-motion';

const icon = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(0, 0, 0, 0)'
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(0, 0, 0, 1)'
  }
};

export default function LogoAnimation({className, pathClassName}: {className?:string, pathClassName?: string}) {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 90 90"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-animation ${className}`}
    >
      <motion.path
      className={pathClassName}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.29 0.809998H0.619995V95.67H23.29V0.809998ZM54.58 0.809998H31.91V95.67H54.58V0.809998ZM63.19 0.809998H85.86V95.67H63.19V0.809998Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 1, ease: 'easeInOut' },
          fill: { duration: .5, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
  );
}
