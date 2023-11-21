'use client';
import { useProjectHovering } from './ProjectHoveringProvider';
import { projects } from '@/utils/data';

const ProjectCard = () => {
  const { showProjectHovering } = useProjectHovering();

  const { projectId } = showProjectHovering;

  const newProjectId = projectId || '01';

  let hoveredProject = {};

  hoveredProject = projects.find(
    (project) => project.projectId === newProjectId
  );

  return (
    <article className="bg-thirdAccent w-[60%] h-[60%]  transform -translate-x-1/2 p-8 absolute  -bottom-[60%] left-1/2 ">
      <div className="flex-col  relative  bg-red-300 h-full w-full  flex gap-8">
        <div>
          <h1> {hoveredProject.projectName}</h1>
          <h1>{hoveredProject.projectType}</h1>
          <div>{hoveredProject.projectId}</div>
        </div>

        <div>
          <p>{hoveredProject.projectDescription}</p>
          {hoveredProject.projectSkill.map(({ skillName }) => (
            <p> {skillName}</p>
          ))}
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
    </article>
  );
};

export default ProjectCard;
