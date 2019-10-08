import React from 'react'
import PropTypes from 'prop-types'

import PreView from './PreView/PreView'
import Description from './Description/Description'

const Project = ({ project }) => (
	<div className="portfolio__pinned--item">
		<PreView
			image={project.image}
			repoLink={project.repoLink}
			webLink={project.webLink}
		/>
		<Description
			name={project.name}
			tag={project.tag}
		/>
	</div>
)

export default Project

Project.propTypes = {
	project: PropTypes.shape({
		name: PropTypes.string.isRequired,
		tag: PropTypes.string.isRequired,
		image: PropTypes.node.isRequired,
		repoLink: PropTypes.string.isRequired,
		webLink: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.bool
		]).isRequired
	})
}
