'use client';

import { createContext, useState, useContext } from 'react';

// Create a context
const ProjectHoveringContext = createContext();

// Create a provider
export const ProjectHoveringProvider = ({ children }) => {
  const [showProjectHovering, setShowProjectHovering] = useState(false);

  const toggleProjectHovering = (projectId) => {
    setShowProjectHovering((prevState) => ({
      ...prevState,
      [projectId]: !prevState[projectId],
      projectId,
    }));
  };

  const value = {
    showProjectHovering,
    toggleProjectHovering,
  };

  return (
    <ProjectHoveringContext.Provider value={value}>
      {children}
    </ProjectHoveringContext.Provider>
  );
};

// Custom hook to use the context
export const useProjectHovering = () => useContext(ProjectHoveringContext);
