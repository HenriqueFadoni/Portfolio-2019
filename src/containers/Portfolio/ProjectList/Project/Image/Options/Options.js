import React from 'react'

import GitHub from './Github/GitHub'
import WebSite from './WebSite/WebSite'

const Options = props => {
	const { repo, web } = props
	let render = null

	if (web) {
		render = (
			<>
				<GitHub repo={repo} web={web} />
				<WebSite web={web} />
			</>
		)
	} else {
		render = <GitHub repo={repo} />
	}

	return (
		<div className="portfolio__options">
			{render}
		</div>
	)
}

export default Options
