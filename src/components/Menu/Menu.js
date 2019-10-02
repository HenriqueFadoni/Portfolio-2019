import React, { useState } from 'react'

import HamburgerBtn from './HamburgerBtn/HamburgerBtn'
import Background from './Background/Background'
import MenuItems from './MenuItems/MenuItems'

const Menu = () => {
	const [active, setActive] = useState(false)

	const onClickHandler = () => setActive(!active)

	return (
		<div className="menu__container">
			<HamburgerBtn
				active={active}
				onClickHandler={onClickHandler}
			/>
			<MenuItems 
				active={active} 
				onClickHandler={onClickHandler}
			/>
			<Background active={active} />
		</div>
	)
}

export default Menu
