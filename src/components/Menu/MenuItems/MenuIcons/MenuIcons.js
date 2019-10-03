import React from 'react'
import PropTypes from 'prop-types'
import {
	faGithubAlt,
	faLinkedin,
	faStackOverflow
} from '@fortawesome/free-brands-svg-icons'

import MenuIcon from './MenuIcon/MenuIcon'

const MenuIcons = ({ active, onClickHandler }) => {
	const iconList = [
		{ 
			icon: faGithubAlt, 
			href: 'https://github.com/HenriqueFadoni'
		},
		{ 
			icon: faLinkedin, 
			href: 'https://www.linkedin.com/in/henriquefadoni/' 
		},
		{ 
			icon: faStackOverflow, 
			href: 'https://stackoverflow.com/users/10830708/henrique-fadoni' 
		}
	]

	const render = iconList.map((icon, index) => (
		<MenuIcon 
			index={index} 
			route={icon.href}
			icon={icon.icon}
		/>
	))

	return (
		<div
			className={
				active
					? 'menu__icons--active'
					: 'menu__icons'
			}
			onClick={onClickHandler}
		>
			{render}
		</div>
	)
}

export default MenuIcons

MenuIcons.propTypes = {
	active: PropTypes.bool.isRequired,
	onClickHandler: PropTypes.func.isRequired
}
