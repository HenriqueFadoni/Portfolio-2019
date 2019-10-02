import React from 'react'
import PropTypes from 'prop-types'

const Text = props => (
	<div className="portfolio__pinned--item-text">
		<h4>{props.name}</h4>
		<div className="portfolio__pinned--item-tag">
			<div className="portfolio__pinned--item-dot">&nbsp;</div>
			<h4>{props.tag}</h4>
		</div>
	</div>
)

export default Text

Text.propTypes = {
	name: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired
}
