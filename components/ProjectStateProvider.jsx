'use client';

import { createContext, useState, useContext } from 'react';

// Create a context
const ProjectStateContext = createContext();

// Create a provider
export const ProjectStateProvider = ({ children }) => {
  const [showProjectHovering, setShowProjectHovering] = useState(false);
  const [showProjectTapped, setShowProjectTapped] = useState(false);
  console.log(showProjectHovering);

  const toggleProjectHovering = (projectId) => {
    setShowProjectHovering((prevState) => ({
      state: () => {
        !prevState;
      },
      id: projectId,
    }));
  };

  const toggleProjectTapped = () => {
    setShowProjectTapped((prev) => !prev);
  };

  const value = {
    showProjectHovering,
    toggleProjectHovering,
    showProjectTapped,
    toggleProjectTapped,
  };

  return (
    <ProjectStateContext.Provider value={value}>
      {children}
    </ProjectStateContext.Provider>
  );
};

// Custom hook to use the context
export const useProjectState = () => useContext(ProjectStateContext);
