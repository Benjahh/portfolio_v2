'use client';

import { FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  const variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const childrenVariant = {
    hidden: {
      x: '200%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variant}
      className=" absolute right-0 mr-20 mt-20 flex w-56 top-0 h-20 justify-between "
    >
      <motion.a variants={childrenVariant} href="https://github.com/Benjahh">
        <FiGithub
          className="text-white hover:cursor-pointer hover:text-accent"
          size="40"
        />
      </motion.a>
      <motion.a
        variants={childrenVariant}
        href="https://www.linkedin.com/in/lucas-agüero-264950251/"
      >
        <FiLinkedin
          className="text-white hover:cursor-pointer hover:text-accent"
          size="40"
        />
      </motion.a>
      <motion.a href="/" download variants={childrenVariant} className="ml-12 ">
        <FiFileText
          className="text-accent hover:cursor-pointer  hover:text-white"
          size="40"
        />
      </motion.a>
    </motion.div>
  );
};

export default SocialLinks;
