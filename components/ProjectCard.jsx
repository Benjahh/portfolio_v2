'use client';
import { useProjectHovering } from './ProjectHoveringProvider';
import { projects } from '@/utils/data';

const ProjectCard = () => {
  const { projectId } = projects;
  const { showProjectHovering } = useProjectHovering();
  const isHovered = showProjectHovering[projectId] || false;
  console.log(showProjectHovering[projectId] || false);
  console.log(isHovered);

  return (
    <article className="bg-green-300 w-96 h-96  transform -translate-x-1/2  absolute  -bottom-96 left-1/2 ">
      {/* Render project card content here */}
      <h1>Project {projectId}</h1>
      <p>{isHovered ? 'Hovering!' : 'Not hovering'}</p>
    </article>
  );
};

export default ProjectCard;
