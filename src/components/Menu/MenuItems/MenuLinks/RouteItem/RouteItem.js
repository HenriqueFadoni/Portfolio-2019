import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const RouteItem = ({ content, route, onClickHandler }) => (
	<li
		className="menu__item"
		onClick={onClickHandler}
	>
		<NavLink
			to={route}
			className="menu__item--link"
		>
			{content}
		</NavLink>
	</li>
)

export default RouteItem

RouteItem.propTypes = {
	content: PropTypes.string.isRequired,
	route: PropTypes.string.isRequired,
	onClickHandler: PropTypes.func.isRequired
}
