'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useProjectState } from './ProjectStateProvider';
import { projects } from '@/utils/data';

const ProjectCard = () => {
  const { showProjectHovering, showProjectTapped } = useProjectState();

  console.log(showProjectHovering);

  /*   hoveredProject = projects.find((project) => project.projectId === id);
   */
  const variants = {
    hidden: {
      bottom: '-500px',
    },
    semiVisible: {
      bottom: '-250px',
    },
    visible: {
      bottom: '0px',
      top: '0px',
      margin: '40px 0 40px 0 ',
    },
    exit: {
      bottom: '-500px',
      transition: { ease: 'easeInOut', duration: 1 },
    },
  };

  return (
    <AnimatePresence>
      {showProjectHovering || showProjectTapped ? (
        <motion.div
          initial="hidden"
          animate={showProjectTapped ? 'visible' : 'semiVisible'}
          variants={variants}
          transition={{ duration: 1 }}
          exit="exit"
          className={`absolute flex flex-col  bg-secondAccent p-8 transform w-2/3 rounded-md  ${
            showProjectTapped ? '' : '-rotate-12'
          } -translate-x-1/2 left-1/2 `}
        >
          <div className="w-full h-2/3 bg-black">
            <div className=""></div>
          </div>
          <div className="flex-col  relative  bg-red-300 h-full w-full  flex gap-8">
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
      ) : (
        <></>
      )}
    </AnimatePresence>
  );
};

export default ProjectCard;
