import React from 'react'
import PropTypes from 'prop-types'

const Background = props => (
	<div
		className={
			props.isButtonAct
				? 'menu__background--active'
				: 'menu__background'
		}
	>
		&nbsp;
	</div>
)

export default Background

Background.propTypes = {
	isButtonAct: PropTypes.bool.isRequired
}
