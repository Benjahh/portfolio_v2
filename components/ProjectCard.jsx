'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useProjectState } from './ProjectStateProvider';
import { projects } from '@/utils/data';

const ProjectCard = () => {
  const { showProjectHovering } = useProjectState();

  console.log(showProjectHovering);

  /*   hoveredProject = projects.find((project) => project.projectId === id);
   */
  const variants = {
    hidden: {
      bottom: '-500px',
      backgroundColor: '#f22989',
    },
    semiVisible: {
      bottom: '-250px',
      backgroundColor: 'red',
    },
    exit: {
      bottom: '-500px',
      transition: { ease: 'easeInOut', duration: 1 },
    },
  };

  return (
    <AnimatePresence>
      {showProjectHovering && (
        <motion.div
          initial="hidden"
          animate={'semiVisible'}
          variants={variants}
          transition={{ duration: 1 }}
          exit="exit"
          className="absolute p-8 transform w-2/3 rounded-xl  -rotate-12 -translate-x-1/2 left-1/2 "
        >
          <div className="w-full h-20 bg-black">
            <div className=""></div>
          </div>
          <div className="flex-col  relative  bg-red-300 h-20 w-full  flex gap-8">
            <div className=" w-full justify-between  flex flex-row">
              <h1> {''}</h1>
              <h1>{''}</h1>
            </div>
            <div> {''}</div>
            <div>
              <div>
                <p>{''}</p>
              </div>
              <div className="flex gap-2 flex-row">Built using;</div>
            </div>

            <div className="absolute bottom-0 gap-4 flex flex-row right-0">
              <a className="bg-accent  text-black project__button" href={''}>
                Source
              </a>
              <a
                className="bg-secondAccent project__button text-white "
                href={''}
              >
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
