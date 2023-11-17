'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="absolute top-0 left-0 m-16  ">
      <motion.div className="text-8xl font-openSans font-bold text-accent">
        <h1>Lucas Agüero</h1>
        <h1 className="pl-8">Full-Stack Developer</h1>
      </motion.div>
    </section>
  );
};

export default Hero;
