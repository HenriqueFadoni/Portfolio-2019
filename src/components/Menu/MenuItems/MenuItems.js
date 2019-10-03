import React from 'react'
import PropTypes from 'prop-types'

import MenuLinks from './MenuLinks/MenuLinks'
import MenuIcons from './MenuIcons/MenuIcons'

const MenuItems = ({ active, onClickHandler }) => (
	<nav className={
		active
			? 'menu__nav--container--active'
			: 'menu__nav--container'
	}>
		<MenuLinks
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
