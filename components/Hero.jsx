'use client';
import { motion } from 'framer-motion';
import { HeroTextAnimation } from './HeroTextAnimation';
import { heroText } from '@/utils/data';

const Hero = () => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  return (
    <section className="absolute top-0 left-0 m-8 md:m-16  ">
      <motion.div initial="hidden" animate="visible" variants={container}>
        <motion.div className="text-4xl md:text-7xl font-fontfamily font-bold text-accent">
          {heroText.map(({ text, padding }) => (
            <HeroTextAnimation text={text} padding={padding} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
