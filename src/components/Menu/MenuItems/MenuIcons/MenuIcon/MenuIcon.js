import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuIcon = ({ route, icon }) => (
	<a
		href={route}
		target="_blank"
		rel="noopener noreferrer"
	>
		<FontAwesomeIcon
			className="menu__icon"
			color="white"
			size="3x"
			icon={icon}
		/>
	</a>
)

export default MenuIcon

MenuIcon.propTypes = {
	route: PropTypes.string.isRequired,
	icon: PropTypes.object.isRequired
}
