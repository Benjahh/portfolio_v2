'use client';

import { motion } from 'framer-motion';

const BottomBar = () => {
  const variant = {
    hidden: {
      opacity: 0,
      y: '200%',
      textColor: 'rgba(255, 255, 255)',
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variant}
      transition={{ duration: 0.5, staggerChildren: 0.025 }}
      className="text-sm font-bold z-40  mr-4 mb-4 text-white bottom-0 right-0 absolute self-end flex flex-col"
    >
      <p className="">2023 - PRESENT © Lucas Agüero</p>
      <p className="">
        Built with <span className="text-accent">Next.js</span>,{' '}
        <span className="text-accent">Framer Motion</span> and
        <span className="text-accent"> Tailwindcss</span>.
      </p>
    </motion.div>
  );
};

export default BottomBar;
