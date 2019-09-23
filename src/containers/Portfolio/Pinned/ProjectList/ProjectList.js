import React from 'react';

import Project from './Project/Project';

const ProjectList = props => {
  const renderList = props.projectList.map(project => (
    <Project 
      name={project.name}
      tag={project.tag}
      repoLink={project.repoLink}
    />
  ))

  return (
    <>
      {renderList}
    </>
  )
}

export default ProjectList