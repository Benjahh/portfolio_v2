'use client';

import { createContext, useState, useContext } from 'react';

// Create a context
const ProjectStateContext = createContext();

// Create a provider
export const ProjectStateProvider = ({ children }) => {
  const [showProjectHovering, setShowProjectHovering] = useState({
    id: false,
    state: false,
  });
  const [showProjectTapped, setShowProjectTapped] = useState({
    id: false,
    state: false,
  });

  const toggleProjectHovering = (projectId) => {
    if (!showProjectTapped.state) {
      setShowProjectHovering((prevState) => ({
        id: projectId,
        state: !prevState.state,
      }));
    } else {
      setShowProjectHovering({ state: false });
    }
  };

  const toggleProjectTapped = (projectId) => {
    setShowProjectTapped((prevState) => ({
      id: projectId,
      state: !prevState.state,
    }));
    setShowProjectHovering({ state: false });
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
