import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGithubAlt,
	faLinkedin
} from '@fortawesome/free-brands-svg-icons'

const Icons = () => (
	<div>
		<a
			href="https://github.com/HenriqueFadoni"
			target="_blank"
			rel="noopener noreferrer"
			className="margin__right--2"
		>
			<FontAwesomeIcon
				className="footer__icon"
				color="white"
				size="2x"
				icon={faGithubAlt}
			/>
		</a>
		<a
			href="https://www.linkedin.com/in/henriquefadoni/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<FontAwesomeIcon
				className="footer__icon"
				color="white"
				size="2x"
				icon={faLinkedin}
			/>
		</a>
	</div>
)

export default Icons
