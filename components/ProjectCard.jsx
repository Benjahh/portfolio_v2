'use client';
import { useProjectContext } from '@/utils/ProjectContext';

const ProjectCard = () => {
  const { projectData } = useProjectContext();

  console.log(projectData);

  return (
    <article className="bg-green-300 w-96 h-96  transform -translate-x-1/2  absolute  -bottom-96 left-1/2 ">
      <h1></h1>
      <p className=""></p>
    </article>
  );
};

export default ProjectCard;
