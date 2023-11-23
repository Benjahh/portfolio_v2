'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useProjectState } from './ProjectStateProvider';
import { projects } from '@/utils/data';

const ProjectCard = () => {
  const { showProjectHovering, showProjectTapped, toggleProjectTapped } =
    useProjectState();

  console.log(showProjectHovering);
  const tapped = showProjectTapped.state;
  console.log(tapped);

  /*   hoveredProject = projects.find((project) => project.projectId === id);
   */
  const variants = {
    hidden: {
      bottom: '-100%',
    },
    semiVisible: {
      bottom: '-95%',
    },
    visible: {
      bottom: '-0%',
    },
    exit: {
      bottom: '-100%',
      transition: { ease: 'easeInOut', duration: 0.5 },
    },
  };

  return (
    <AnimatePresence>
      {(showProjectHovering || tapped) && (
        <motion.div
          initial="hidden"
          animate={tapped ? 'visible' : 'semiVisible'}
          variants={variants}
          transition={{ duration: 0.5 }}
          exit="exit"
          className={`absolute flex flex-row h-[90%] bg-secondAccent p-4 transform w-2/3 rounded-md gap-4 -translate-x-1/2 left-1/2 `}
        >
          {tapped && (
            <div
              onClick={() => toggleProjectTapped()}
              className="bg-red-500 text-white absolute top-0 self-center left-1/2 transform -translate-x-1/2"
            >
              close
            </div>
          )}
          <div className="w-full h-full gap-4 flex flex-col ">
            <div className="bg-black rounded-md h-2/3"></div>
            <div className="bg-primary rounded-md h-1/3 w-full">s</div>
          </div>
          <div className="flex-col h-full w-full flex gap-4">
            <div className="bg-primary flex-col rounded-md flex w-full h-full">
              <div className=" w-full justify-between  flex flex-row">
                <h1> {''}</h1>
                <h1>{''}</h1>
              </div>
              <div> {''}</div>
              <div>
                <p>{''}</p>
              </div>
            </div>
            <div className="gap-4 flex flex-row self-end">
              <a className="bg-accent  text-black project__button" href={''}>
                Source
              </a>
              <a className="bg-black project__button text-white " href={''}>
                Live
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectCard;
