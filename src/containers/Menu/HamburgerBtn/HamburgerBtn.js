import React from 'react'
import PropTypes from 'prop-types'

const HamburgerBtn = props => (
	<button
		type="button"
		onClick={props.clickHandler}
		className={
			props.isButtonAct
				? 'hamburger hamburger--spin is-active'
				: 'hamburger hamburger--spin'
		}>
		<span className="hamburger-box">
			<span className="hamburger-inner"></span>
		</span>
	</button>
)

export default HamburgerBtn

HamburgerBtn.propTypes = {
	isButtonAct: PropTypes.bool.isRequired,
	clickHandler: PropTypes.func
}
