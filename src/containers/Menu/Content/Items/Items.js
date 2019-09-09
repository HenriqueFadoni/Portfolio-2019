import React from 'react'

import RouteItem from './RouteItem/RouteItem'
import LinkItem from './LinkItem/LinkItem'

const Items = props => {
	const listItems = props.routes.map((route, index) => {
		let render = null

		if (route.title !== 'RESUME') {
			render = <RouteItem route={route} />
		} else {
			render = <LinkItem route={route} />
		}

		return (
			<li className="menu__item" key={index}>
				{render}
			</li>
		)
	})

	return (
		<ul className={
			props.isButtonAct
				? 'menu__list--active'
				: 'menu__list'
		}>
			{listItems}
		</ul>
	)
}

export default Items
