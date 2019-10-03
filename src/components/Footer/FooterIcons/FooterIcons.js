import React from 'react'
import {
	faGithubAlt,
	faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import FooterIcon from './FooterIcon/FooterIcon'

const FooterIcons = () => (
	<div>
		<FooterIcon
			route='https://github.com/HenriqueFadoni'
			icon={faGithubAlt}
		/>
		<FooterIcon
			route='https://www.linkedin.com/in/henriquefadoni/'
			icon={faLinkedin}
		/>
	</div>
)

export default FooterIcons
