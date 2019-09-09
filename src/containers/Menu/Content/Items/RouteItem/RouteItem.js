import React from 'react'
import { NavLink } from 'react-router-dom'

const RouteItem = props => (
	<NavLink
		to={props.route.to}
		className="menu__item--link"
	>
		{props.route.title}
	</NavLink>
)

export default RouteItem
