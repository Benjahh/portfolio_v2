'use client';

import { motion } from 'framer-motion';
import { useProjectState } from './ProjectStateProvider';
import { projects } from '@/utils/data';

const ProjectCard = () => {
  const { showProjectHovering } = useProjectState();

  const { id } = showProjectHovering;

  let hoveredProject = {};

  hoveredProject = projects.find((project) => project.projectId === id);
  if (!hoveredProject) hoveredProject = false;
  console.log(hoveredProject);

  const variants = {
    hidden: {
      bottom: '-500px',
      backgroundColor: '#f22989',
    },
    visible: {
      bottom: '-170px',
      backgroundColor: 'red',
    },
  };

  return (
    <>
      {hoveredProject && (
        <motion.div
          initial="hidden"
          animate={hoveredProject && 'visible'}
          variants={variants}
          transition={{ duration: 1 }}
          className="absolute p-8 transform  -rotate-12 -translate-x-1/2 left-1/2 "
        >
          <div className="w-full h-20 bg-black">
            <div className=""></div>
          </div>
          <div className="flex-col  relative  bg-red-300 h-20 w-full  flex gap-8">
            <div className=" w-full justify-between  flex flex-row">
              <h1> {hoveredProject.projectName}</h1>
              <h1>{hoveredProject.projectType}</h1>
            </div>
            <div> {hoveredProject.projectId}</div>
            <div>
              <div>
                <p>{hoveredProject.projectDescription}</p>
              </div>
              <div className="flex gap-2 flex-row">
                Built using;
                {hoveredProject.projectSkill.map(({ skillName }) => (
                  <p> {skillName}</p>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 gap-4 flex flex-row right-0">
              <a
                className="bg-accent  text-black project__button"
                href={hoveredProject.projectRepo}
              >
                Source
              </a>
              <a
                className="bg-secondAccent project__button text-white "
                href={hoveredProject.projectLink}
              >
                Live
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;
