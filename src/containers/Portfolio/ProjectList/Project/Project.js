import React from 'react'

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
