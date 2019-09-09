import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGithubAlt,
	faLinkedin,
	faStackOverflow
} from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'

const Icons = props => {
	const [iconList] = useState([
		{ icon: faGithubAlt, href: 'https://github.com/HenriqueFadoni' },
		{ icon: faLinkedin, href: 'https://www.linkedin.com/in/henriquefadoni/' },
		{ icon: faStackOverflow, href: 'https://stackoverflow.com/users/10830708/henrique-fadoni' }
	])

	return (
		<div className={
			props.isButtonAct
				? 'menu__icons--active'
				: 'menu__icons'
		}>
			{
				iconList.map((icon, index) => (
					<a
						key={index}
						href={icon.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							className="menu__icon"
							color="white"
							size="3x"
							icon={icon.icon}
						/>
					</a>
				))
			}
		</div>
	)
}

export default Icons

Icons.propTypes = {
	isButtonAct: PropTypes.bool.isRequired
}
