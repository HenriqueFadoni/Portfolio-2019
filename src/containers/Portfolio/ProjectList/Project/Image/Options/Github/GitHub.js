import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const GitHub = props => (
	<a
		href={props.repo}
		target="_blank"
		rel="noopener noreferrer"
		className={
			props.web
				? 'margin__right--3'
				: null
		}
	>
		<FontAwesomeIcon
			className="portfolio__icon"
			color="#ff581a"
			size="4x"
			icon={faGithubAlt}
		/>
	</a>
)

export default GitHub

GitHub.propTypes = {
	repo: PropTypes.string.isRequired,
	web: PropTypes.string.isRequired
}
