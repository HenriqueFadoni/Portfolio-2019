import React from 'react'
import PropTypes from 'prop-types'

import Items from './Items/Items'
import Icons from './Icons/Icons'

const MenuItems = ({ active, onClickHandler }) => (
	<nav className={
		active
			? 'menu__nav--container--active'
			: 'menu__nav--container'
	}>
		<Items
			active={active}
			onClickHandler={onClickHandler}
		/>
		<Icons
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
