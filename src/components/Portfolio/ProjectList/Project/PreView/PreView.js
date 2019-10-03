import React, { useState } from 'react'
import PropTypes from 'prop-types'

import PreViewLinks from './PreViewLinks/PreViewLinks'

const PreView = ({ image, repoLink, webLink }) => {
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
					? <PreViewLinks repo={repoLink} web={webLink} />
					: null
			}
			<img src={image} alt="Project" />
		</div>
	)
}

export default PreView

PreView.propTypes = {
	image: PropTypes.node.isRequired,
	repoLink: PropTypes.string.isRequired,
	webLink: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.string
	]).isRequired
}
