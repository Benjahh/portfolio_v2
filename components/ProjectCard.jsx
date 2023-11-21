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
    <article className="bg-thirdAccent w-[80%] h-[70%] transform -translate-x-1/2 p-8 absolute gap-4 flex row -bottom-[70%] left-1/2 ">
      <div className="w-full h-full bg-black">
        <div className="">s</div>
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
    </article>
  );
};

export default ProjectCard;
