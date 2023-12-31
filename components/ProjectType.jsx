'use client';

import { motion } from 'framer-motion';
import { useProjectState } from './ProjectStateProvider';

const ProjectType = ({ projectId, projectName, projectType }) => {
  const {
    toggleProjectHovering,
    toggleProjectTapped,
    showProjectTapped,
    showProjectHovering,
  } = useProjectState();

  const variant = {
    hidden: {
      x: '-200%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.4 },
    },
    visible: {
      x: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 1.3,
        type: 'spring',
      },
    },
  };

  return (
    <motion.div
      variants={variant}
      className="flex hover:bg-secondAccent hover:cursor-pointer flex-row hover:brightness-125 px-2 py-[0.5px] rounded-md  justify-between gap-12 md:gap-24"
      onClick={() => {
        if (!showProjectTapped.state) {
          toggleProjectTapped(projectId);
          console.log(projectId);
        }
      }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => toggleProjectHovering(projectId)}
      onHoverEnd={() => toggleProjectHovering()}
      transition={{
        staggerChildren: 0,
      }}
    >
      <h1 className="flex flex-row w-full gap-2">
        <span className="text-white">{projectId}</span>
        <span className="text-accent">{projectName}</span>
      </h1>
      <h1 className="min-w-max text-white">{projectType}</h1>
    </motion.div>
  );
};

export default ProjectType;
