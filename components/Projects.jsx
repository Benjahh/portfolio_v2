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
    <section className="absolute left-0 bottom-0 text-accent m-8 md:m-16 ">
      <motion.div
        whileHover={{ overflow: 'visible' }}
        className="flex flex-col font-bold overflow-hidden text-sm pr-6 md:text-xl font-openSans"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.25, ease: 'easeIn' }}
          className="text-white tracking-wider font-fontfamily"
        >
          Projects
        </motion.h1>
        <motion.div initial="hidden" animate="visible" variants={variants}>
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
