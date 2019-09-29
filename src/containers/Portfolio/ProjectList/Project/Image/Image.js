import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Options from './Options/Options'

const Image = props => {
	const {
		image,
		repoLink,
		webLink
	} = props
	const [show, setShow] = useState(false)

	const onHover = () => setShow(true)
	const onHoverLeave = () => setShow(false)

	return (
		<div
			className="portfolio__pinned--item-img"
			onMouseEnter={onHover}
			onMouseLeave={onHoverLeave}
		>
			{
				show
					? <Options repo={repoLink} web={webLink} />
					: null
			}
			<img src={image} alt="Project" />
		</div>
	)
}

export default Image

Image.propTypes = {
	image: PropTypes.node.isRequired,
	repoLink: PropTypes.string.isRequired,
	webLink: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.string
	]).isRequired
}
