'use client';
import { projects } from '@/utils/data';
import { motion } from 'framer-motion';

import ProjectType from './ProjectType';

const Projects = () => {
  const variants = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <section className="absolute md:left-0  w-screen md:w-auto bottom-0 text-accent px-4 mb-28   ">
      <motion.div
        whileHover={{ overflow: 'visible' }}
        className="flex flex-col font-bold overflow-hidden  md:text-xl font-openSans"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.25, ease: 'easeIn' }}
          className="text-white tracking-wider font-fontfamily"
        >
          Projects
        </motion.h1>
        <motion.div
          initial="hidden"
          className="flex-col  gap-1 border"
          animate="visible"
          variants={variants}
        >
          {projects.map(
            ({
              projectDescription,
              projectId,
              projectName,
              projectRepo,
              projectLink,
              projectType,
            }) => (
              <ProjectType
                projectType={projectType}
                projectName={projectName}
                projectId={projectId}
              />
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
