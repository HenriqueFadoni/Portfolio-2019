import React from 'react';
import PropTypes from 'prop-types'

import Project from './Project/Project'

const ProjectList = props => {
  const renderList = props.projectList.map((project, i) => (
    <Project 
      key={`${i}-${project.name}`}
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

ProjectList.proptype = {
  projectList: PropTypes.arrayOf(PropTypes.object).isRequired
}
