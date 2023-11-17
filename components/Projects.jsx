'use client';
import { projects } from '@/utils/data';
import { motion } from 'framer-motion';
import { useProjectContext } from '@/utils/ProjectContext';

const Projects = () => {
  const { setProject } = useProjectContext();
  const projectData = 2;
  const test = () => {
    setProject(projectData);
  };

  return (
    <section className="absolute left-0 bottom-0 text-accent m-8 md:m-16 ">
      <div className="flex flex-col font-bold text-sm md:text-xl font-openSans">
        <h1 className="text-white">Projects</h1>
        {projects.map(
          ({
            projectDescription,
            projectId,
            projectName,
            projectRepo,
            projectLink,
            projectType,
          }) => (
            <div className="static" key={projectId}>
              <motion.div className="flex flex-row justify-between gap-8">
                <h1 className="flex flex-row w-full  gap-2">
                  <span className="text-white">{projectId}</span>
                  <span className="text-accent">{projectName}</span>
                </h1>
                <h1 className="min-w-max text-white">{projectType}</h1>
              </motion.div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
