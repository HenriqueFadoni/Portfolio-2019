import React from 'react'
import PropTypes from 'prop-types'

import Project from './Project/Project'

const ProjectList = ({ projectList }) => {
	const renderList = projectList.map((project, i) => (
		<Project
			key={`${i}-${project.name}`}
			project={project}
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
