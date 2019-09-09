import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const RouteItem = props => (
	<NavLink
		to={props.route.to}
		className="menu__item--link"
	>
		{props.route.title}
	</NavLink>
)

export default RouteItem

RouteItem.propTypes = {
	route: PropTypes.shape({
		to: PropTypes.string,
		title: PropTypes.string
	}).isRequired
}
