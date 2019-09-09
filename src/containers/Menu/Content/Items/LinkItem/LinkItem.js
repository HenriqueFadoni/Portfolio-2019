import React from 'react'

const LinkItem = props => (
	<a
		className="menu__item--link"
		target="_blank"
		href={props.route.to}
		rel="noopener noreferrer"
	>
		{props.route.title}
	</a>
)

export default LinkItem
