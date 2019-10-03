import React from 'react'
import PropTypes from 'prop-types'

import RouteItem from './RouteItem/RouteItem'
import LinkItem from './LinkItem/LinkItem'

const Links = ({ active, onClickHandler }) => (
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
			route='https://drive.google.com/file/d/16R8eLmjIEAC6k4CUSAZxrJ0ikb6M1RzG/view'
			onClickHandler={onClickHandler}
		/>
		<RouteItem
			content='CONTACTS'
			route='/contact'
			onClickHandler={onClickHandler}
		/>
	</ul>
)

export default Links

Links.propTypes = {
	active: PropTypes.bool.isRequired,
	onClickHandler: PropTypes.func.isRequired
}
