import React from 'react'

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
