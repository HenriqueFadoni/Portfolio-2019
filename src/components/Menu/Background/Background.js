import React from 'react'
import PropTypes from 'prop-types'

const Background = ({ active }) => (
	<div
		className={
			active
				? 'menu__background--active'
				: 'menu__background'
		}
	>
		&nbsp;
	</div>
)

export default Background

Background.propTypes = {
	active: PropTypes.bool.isRequired
}
