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
    <section className="absolute right-0 mt-4 mr-4 md:mr-20 w-56 top-0 md:mt-20 ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variant}
        className="  flex flex-row justify-end  gap-2 "
      >
        <motion.a variants={childrenVariant} href="https://github.com/Benjahh">
          <FiGithub className="social__icon" />
        </motion.a>
        <motion.a
          variants={childrenVariant}
          href="https://www.linkedin.com/in/lucas-agüero-264950251/"
        >
          <FiLinkedin className="social__icon" />
        </motion.a>
        <motion.a
          href="/"
          download
          variants={childrenVariant}
          className=" ml-6 md:ml-12 "
        >
          <FiFileText className="text-accent hover:cursor-pointer h-6 w-6 md:w-10  md:h-10  hover:text-white" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default SocialLinks;
