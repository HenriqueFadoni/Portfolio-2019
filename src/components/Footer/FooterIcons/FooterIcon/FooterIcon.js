import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const FooterIcons = ({ route, icon }) => (
	<a
		href={route}
		target="_blank"
		rel="noopener noreferrer"
		className="margin__right--2"
	>
		<FontAwesomeIcon
			className="footer__icon"
			color="white"
			size="2x"
			icon={icon}
		/>
	</a>
)

export default FooterIcons

FooterIcons.propTypes = {
	route: PropTypes.string.isRequired,
	icon: PropTypes.object.isRequired
}
