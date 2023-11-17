'use client';

import { createContext, useState, useContext } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projectData, setProjectData] = useState(null);
  console.log(projectData);

  const setProject = (data) => {
    setProjectData(data);
  };

  return (
    <ProjectContext.Provider value={{ projectData, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
