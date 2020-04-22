import React from 'react'
import PropTypes from 'prop-types'

import RouteItem from './RouteItem/RouteItem'
import LinkItem from './LinkItem/LinkItem'

const MenuLinks = ({ active, onClickHandler }) => (
	<ul className={
		active
			? 'menu__list--active'
			: 'menu__list'
	}>
		<RouteItem
			content='HOME'
			route='/'
			onClickHandler={onClickHandler}
		/>
		<RouteItem
			content='ABOUT'
			route='/about'
			onClickHandler={onClickHandler}
		/>
		<RouteItem
			content='PORTFOLIO'
			route='/portfolio'
			onClickHandler={onClickHandler}
		/>
		<LinkItem
			content='RESUME'
			route='https://drive.google.com/file/d/1KZeiOD68-bun5Tj2SRjUcNt232V4VDFN/view?usp=sharing'
			onClickHandler={onClickHandler}
		/>
		<RouteItem
			content='CONTACTS'
			route='/contact'
			onClickHandler={onClickHandler}
		/>
	</ul>
)

export default MenuLinks

MenuLinks.propTypes = {
	active: PropTypes.bool.isRequired,
	onClickHandler: PropTypes.func.isRequired
}
