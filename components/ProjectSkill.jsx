import React from 'react';

export const ProjectSkill = ({ projectSkill }) => {
  return (
    <>
      {projectSkill.map(({ skillName }) => (
        <div key={skillName}>{skillName}</div>
      ))}
    </>
  );
};
