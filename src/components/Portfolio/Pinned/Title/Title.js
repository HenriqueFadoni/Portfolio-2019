import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Title = () => (
	<div className="portfolio__pinned--title">
		<FontAwesomeIcon
			color="#ff581a"
			size="2x"
			icon={faStar}
		/>
		<h1>Pinned</h1>
	</div>
)

export default Title
