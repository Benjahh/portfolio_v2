'use client';

import { createContext, useState, useContext } from 'react';

// Create a context
const ProjectStateContext = createContext();

// Create a provider
export const ProjectStateProvider = ({ children }) => {
  const [showProjectHovering, setShowProjectHovering] = useState(false);
  const [showProjectTapped, setShowProjectTapped] = useState({
    id: false,
    state: false,
  });
  console.log(showProjectHovering);
  console.log(showProjectTapped);

  const toggleProjectHovering = () => {
    if (!showProjectTapped.state) {
      setShowProjectHovering(!showProjectHovering);
    } else {
      setShowProjectHovering(false);
    }
  };

  const toggleProjectTapped = (projectId) => {
    console.log(projectId);
    setShowProjectTapped({
      id: projectId,
      state: !showProjectTapped.state,
    });
    setShowProjectHovering(false);
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
