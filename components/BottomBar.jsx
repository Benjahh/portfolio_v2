'use client';

import { motion } from 'framer-motion';

const BottomBar = () => {
  const variant = {
    hidden: {
      opacity: 0,
      y: '200%',
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className=" md:mr-4 md:mb-4 mr-1 mb-1 bottom-0 right-0 absolute">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variant}
        transition={{ duration: 0.5, staggerChildren: 0.025 }}
        className="text-xs  md:text-sm font-bold  text-white  self-end flex flex-col"
      >
        <p className="">2023 - PRESENT © Lucas Agüero</p>
        <p className="">
          Built with <span className="text-accent">Next.js</span>,{' '}
          <span className="text-accent">Framer Motion</span> and
          <span className="text-accent"> Tailwindcss</span>.
        </p>
      </motion.div>
    </section>
  );
};

export default BottomBar;
