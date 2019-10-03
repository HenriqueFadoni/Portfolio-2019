import React from 'react'
import PropTypes from 'prop-types'

import GitHub from './Github/GitHub'
import WebSite from './WebSite/WebSite'

const PreViewLinks = ({ repo, web }) => {
	const hasBothLinks = (
		<>
			<GitHub repo={repo} web={web} />
			<WebSite web={web} />
		</>
	)
	const hasOneLink = <GitHub repo={repo} />

	return (
		<div className="portfolio__options">
			{web ? hasBothLinks : hasOneLink}
		</div>
	)
}

export default PreViewLinks

PreViewLinks.propTypes = {
	repo: PropTypes.string.isRequired,
	web: PropTypes.string.isRequired
}
