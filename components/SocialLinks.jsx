'use client';

import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  const variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 1,
      },
    },
  };

  const childrenVariant = {
    hidden: {
      x: '200%',
    },
    visible: {
      x: 0,
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variant}
      className="text-red-400 absolute right-0 mr-20 mt-20 flex flex-row gap-4 top-0 h-20"
    >
      <motion.a
        initial="hidden"
        animate="visible"
        variants={childrenVariant}
        href="https://www.mudai.dev"
        onHover={{ scale: 2 }}
        className="hover:cursor-pointer"
      >
        <FiGithub className="text-accent" size="40" />
      </motion.a>
      <motion.a
        initial="hidden"
        animate="visible"
        variants={variant}
        href="https://www.mudai.dev"
        className="hover:cursor-pointer"
      >
        <FiLinkedin className="text-white" size="40" />
      </motion.a>
    </motion.div>
  );
};

export default SocialLinks;
