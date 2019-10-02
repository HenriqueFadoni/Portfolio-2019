import React from 'react'
import PropTypes from 'prop-types'

import Project from './Project/Project'

const ProjectList = props => {
	const renderList = props.projectList.map((project, i) => (
		<Project 
			key={`${i}-${project.name}`}
			name={project.name}
			tag={project.tag}
			image={project.image}
			repoLink={project.repoLink}
			webLink={project.webLink}
		/>
	))

	return (
		<>
			{renderList}
		</>
	)
}

export default ProjectList

ProjectList.propTypes = {
	projectList: PropTypes.arrayOf(PropTypes.object).isRequired
}
