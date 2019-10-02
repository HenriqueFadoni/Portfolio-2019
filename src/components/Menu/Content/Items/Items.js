import React from 'react'
import PropTypes from 'prop-types'

import RouteItem from './RouteItem/RouteItem'
import LinkItem from './LinkItem/LinkItem'

const Items = props => {
	const { routes } = props
	const listItems = routes.map((route, index) => {
		let render = null

		if (route.title !== 'RESUME') {
			render = <RouteItem route={route} />
		} else {
			render = <LinkItem route={route} />
		}

		return (
			<li 
				className="menu__item" 
				key={index}
				onClick={props.clickHandler}
			>
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

Items.propTypes = {
	clickHandler: PropTypes.func.isRequired,
	isButtonAct: PropTypes.bool.isRequired,
	routes: PropTypes.arrayOf(PropTypes.shape({
		to: PropTypes.string,
		title: PropTypes.string
	})).isRequired
}
