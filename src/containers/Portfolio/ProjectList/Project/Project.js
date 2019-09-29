import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image/Image'
import Text from './Text/Text'

const Project = props => {
	const {
		name,
		tag,
		image,
		repoLink,
		webLink
	} = props

	return (
		<div className="portfolio__pinned--item">
			<Image
				image={image}
				repoLink={repoLink}
				webLink={webLink}
			/>
			<Text 
				name={name} 
				tag={tag}
			/>
		</div>
	)
}

export default Project

Project.propTypes = {
	name: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	image: PropTypes.node.isRequired,
	repoLink: PropTypes.string.isRequired,
	webLink: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool
	]).isRequired
}
