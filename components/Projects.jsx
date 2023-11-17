'use client';
import { projects } from '@/utils/data';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className="absolute left-0 bottom-0 text-accent m-16 ">
      <div className="flex flex-col font-bold text-xl font-openSans">
        Projects
        {projects.map(
          ({
            projectDescription,
            projectId,
            projectName,
            projectRepo,
            projectLink,
            projectType,
          }) => (
            <div key={projectId}>
              <motion.div className="flex flex-row justify-between gap-8">
                <h1 className="flex flex-row w-full  gap-2">
                  <span>{projectId}</span>
                  <span>{projectName}</span>
                </h1>
                <h1 className="min-w-max">{projectType}</h1>
              </motion.div>
              <ProjectCard
                projectLink={projectLink}
                projectRepo={projectRepo}
                projectName={projectName}
                projectType={projectType}
                projectDescription={projectDescription}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
