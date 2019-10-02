import React from 'react'
import PropTypes from 'prop-types'

import Links from './Links/Links'
import MenuIcons from './MenuIcons/MenuIcons'

const MenuItems = ({ active, onClickHandler }) => (
	<nav className={
		active
			? 'menu__nav--container--active'
			: 'menu__nav--container'
	}>
		<Links
			active={active}
			onClickHandler={onClickHandler}
		/>
		<MenuIcons
			active={active}
			onClickHandler={onClickHandler}
		/>
	</nav>
)

export default MenuItems

MenuItems.propTypes = {
	onClickHandler: PropTypes.func.isRequired,
	active: PropTypes.bool.isRequired
}
