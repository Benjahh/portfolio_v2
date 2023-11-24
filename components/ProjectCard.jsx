'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useProjectState } from './ProjectStateProvider';
import { projects } from '@/utils/data';

const ProjectCard = () => {
  const { showProjectHovering, showProjectTapped, toggleProjectTapped } =
    useProjectState();

  const tapped = showProjectTapped.state;

  const tappedProject = projects.find((project) => {
    if (showProjectHovering.state) {
      return project.projectId === showProjectHovering.id;
    } else if (showProjectTapped.state) {
      return project.projectId === showProjectTapped.id;
    }
  });

  const variants = {
    hidden: {
      bottom: '-100%',
    },
    semiVisible: {
      bottom: '-87%',
    },
    visible: {
      bottom: '0%',
    },
    exit: {
      bottom: '-100%',
      transition: { ease: 'easeInOut', duration: 0.5 },
    },
  };

  return (
    <AnimatePresence>
      {(showProjectHovering.state || tapped) && (
        <motion.div
          initial="hidden"
          animate={tapped ? 'visible' : 'semiVisible'}
          variants={variants}
          transition={{ duration: 0.5 }}
          exit="exit"
          className={`absolute h-full text-xl  transform w-[80%] p-10 -translate-x-1/2 left-1/2 `}
        >
          <div className="relative shadow-lg bg-secondAccent w-full h-full flex flex-row p-4 rounded-md gap-4 ">
            {tapped && (
              <div
                onClick={() => toggleProjectTapped()}
                className="font-bold hover:cursor-pointer text-white absolute top-0 self-center left-1/2 transform -translate-x-1/2"
              >
                X
              </div>
            )}
            <div className="w-full h-full gap-4 flex flex-col ">
              <div className="bg-black rounded-md h-2/3"></div>
              <div className="bg-primary rounded-md h-1/3 w-full">s</div>
            </div>
            <div className="flex-col h-full w-full flex gap-4">
              <div className="flex-col  flex w-full h-full gap-4">
                <div className=" w-full justify-between px-2 text-sm  gap-1 flex flex-row">
                  <h1 className="project__title">
                    {tappedProject?.projectName}
                  </h1>
                  <h1 className="project__title">
                    {tappedProject?.projectType}
                  </h1>
                </div>
                <div className="bg-primary rounded-md text-white h-full p-4 text-sm  w-full ">
                  <p>{tappedProject?.projectDescription}</p>
                </div>
              </div>
              <div className="gap-4 flex text-sm font-openSans flex-row self-end">
                <a className="bg-accent  text-black project__button" href={''}>
                  Source
                </a>
                <a className="bg-black project__button text-white " href={''}>
                  Live
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectCard;
