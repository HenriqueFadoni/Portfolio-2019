import React from 'react'
import PropTypes from 'prop-types'

const LinkItem = props => (
	<a
		className="menu__item--link"
		target="_blank"
		href={props.route.to}
		rel="noopener noreferrer"
	>
		{props.route.title}
	</a>
)

export default LinkItem

LinkItem.propTypes = {
	route: PropTypes.shape({
		to: PropTypes.string,
		title: PropTypes.string
	}).isRequired
}
