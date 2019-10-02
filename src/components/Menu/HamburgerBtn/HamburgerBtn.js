import React from 'react'
import PropTypes from 'prop-types'

const HamburgerBtn = ({ active, onClickHandler }) => (
	<button
		type="button"
		onClick={onClickHandler}
		className={
			active
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
	active: PropTypes.bool.isRequired,
	onClickHandler: PropTypes.func
}
