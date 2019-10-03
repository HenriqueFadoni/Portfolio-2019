import React from 'react'
import PropTypes from 'prop-types'

const LinkItem = ({ content, route, onClickHandler }) => (
	<li
		className="menu__item"
		onClick={onClickHandler}
	>
		<a
			className="menu__item--link"
			target="_blank"
			href={route}
			rel="noopener noreferrer"
		>
			{content}
		</a>
	</li>
)

export default LinkItem

LinkItem.propTypes = {
	content: PropTypes.string.isRequired,
	route: PropTypes.string.isRequired,
	onClickHandler: PropTypes.func.isRequired
}
