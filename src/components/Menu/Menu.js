import React, { Component } from 'react'

import HamburgerBtn from './HamburgerBtn/HamburgerBtn'
import Background from './Background/Background'
import MenuItems from './MenuItems/MenuItems'

import enhanceWithClickOutside from 'react-click-outside'

class Menu extends Component {
	state = {
		active: false
	}

	onClickHandler = () => this.setState({ active: !this.state.active })

	handleClickOutside() {
		if (this.state.active) {
			this.onClickHandler();
		}
	}
	
	render() {
		const { active } = this.state

		return (
			<div className="menu__container">
				<HamburgerBtn
					active={active}
					onClickHandler={this.onClickHandler}
				/>
				<MenuItems
					active={active}
					onClickHandler={this.onClickHandler}
				/>
				<Background active={active} />
			</div>
		)
	}
}

export default enhanceWithClickOutside(Menu)
