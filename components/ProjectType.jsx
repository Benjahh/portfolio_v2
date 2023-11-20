import { motion } from 'framer-motion';
import { useProjectHovering } from './ProjectHoveringProvider';

const ProjectType = ({ projectId, projectName, projectType }) => {
  const { showProjectHovering, toggleProjectHovering } = useProjectHovering();
  console.log(showProjectHovering[projectId]);
  const isHovered = showProjectHovering[projectId] || false; // Default to false if undefined
  const a = isHovered.toString();

  const variant = {
    // Your animation variants...
  };

  return (
    <motion.div
      variants={variant}
      className="flex flex-row justify-between gap-8"
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => toggleProjectHovering(projectId)}
      onHoverEnd={() => toggleProjectHovering(projectId)}
      transition={{
        staggerChildren: 4,
      }}
    >
      <h1 className="flex flex-row w-full gap-2">
        <span className="text-white">{projectId}</span>
        <span className="text-accent">{projectName}</span>
      </h1>
      <h1 className="min-w-max text-white">{projectType}</h1>
      {a}
    </motion.div>
  );
};

export default ProjectType;
