import React from 'react'
import PropTypes from 'prop-types'

import RouteItem from './RouteItem/RouteItem'
import LinkItem from './LinkItem/LinkItem'

const Items = ({ active, onClickHandler }) => {
	const routes = [
		{
			to: '/',
			title: 'HOME'
		},
		{
			to: '/about',
			title: 'ABOUT'
		},
		{
			to: '/portfolio',
			title: 'PORTFOLIO'
		},
		{
			to: 'https://drive.google.com/file/d/16R8eLmjIEAC6k4CUSAZxrJ0ikb6M1RzG/view',
			title: 'RESUME'
		},
		{
			to: '/contact', 
			title: 'CONTACTS'
		}
	]

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
				onClick={onClickHandler}
			>
				{render}
			</li>
		)
	})

	return (
		<ul className={
			active
				? 'menu__list--active'
				: 'menu__list'
		}>
			{listItems}
		</ul>
	)
}

export default Items

Items.propTypes = {
	onClickHandler: PropTypes.func.isRequired,
	active: PropTypes.bool.isRequired
}
