import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Items from './Items/Items'
import Icons from './Icons/Icons'

const Content = props => {
	const [routes] = useState([
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
			to: 'https://drive.google.com/file/d/1QDj5qjCMVyWiGUe63Jp9K4I6lXv4A97j/view?usp=sharing',
			title: 'RESUME'
		},
		{
			to: '/contact', 
			title: 'CONTACTS'
		}
	])

	return (
		<nav className={
			props.isButtonAct
				? 'menu__nav--container--active'
				: 'menu__nav--container'
		}>
			<Items isButtonAct={props.isButtonAct} routes={routes} />
			<Icons isButtonAct={props.isButtonAct} />
		</nav>
	)
}

export default Content

Content.propTypes = {
	isButtonAct: PropTypes.bool.isRequired
}
