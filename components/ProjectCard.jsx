'use client';
import { useProjectHovering } from './ProjectHoveringProvider';
import { projects } from '@/utils/data';

const ProjectCard = () => {
  const { showProjectHovering } = useProjectHovering();

  const { projectId } = showProjectHovering;

  const newProjectId = projectId || '01';

  return (
    <article className="bg-green-300 w-96 h-96  transform -translate-x-1/2  absolute  -bottom-96 left-1/2 ">
      {/* Render project card content here */}
      <h1>Project {projectId}</h1>
      <div>
        {projects.map(({ projectId }) => {
          if (projectId === newProjectId) return true;
        })}
      </div>
    </article>
  );
};

export default ProjectCard;
