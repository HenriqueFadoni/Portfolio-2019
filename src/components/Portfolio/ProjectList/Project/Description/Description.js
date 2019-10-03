import React from 'react'
import PropTypes from 'prop-types'

const Description = ({ name, tag }) => (
	<div className="portfolio__pinned--item-text">
		<h4>{name}</h4>
		<div className="portfolio__pinned--item-tag">
			<div className="portfolio__pinned--item-dot">&nbsp;</div>
			<h4>{tag}</h4>
		</div>
	</div>
)

export default Description

Description.propTypes = {
	name: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired
}
