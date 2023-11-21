'use client';

import { motion } from 'framer-motion';
import { useProjectHovering } from './ProjectHoveringProvider';
import { projects } from '@/utils/data';

const ProjectCard = () => {
  const { showProjectHovering } = useProjectHovering();

  const { projectId } = showProjectHovering;

  let hoveredProject = {};

  hoveredProject = projects.find((project) => project.projectId === projectId);
  console.log(hoveredProject);

  const variants = {
    hidden: {
      bottom: '70%',
      backgroundColor: '#f22989',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.4 },
    },
    visible: {
      bottom: '70%',
      backgroundColor: '#e32989',
      padding: '50px',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.3 },
    },
  };

  return (
    <>
      {hoveredProject && (
        <motion.article
          animate={hoveredProject ? 'visible' : 'hidden'}
          variant={variants}
          transition={{ duration: 4 }}
          className="bg-thirdAccent w-[80%] h-[70%] transform -translate-x-1/2 p-8 absolute gap-8  left-1/2 "
        >
          <div className="w-full h-full bg-black">
            <div className=""></div>
          </div>
          <div className="flex-col  relative  bg-red-300 h-full w-full  flex gap-8">
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
        </motion.article>
      )}
    </>
  );
};

export default ProjectCard;
