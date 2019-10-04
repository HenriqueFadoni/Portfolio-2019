import React from 'react'
import PropTypes from 'prop-types'

const ChangeTxtBtn = ({ selectedText, clickHandler }) => (
	<div className="about__header__button--container">
		<button
			className={
				selectedText === 1
					? 'button__about--header--active'
					: 'button__about--header'
			}
			onClick={() => clickHandler(1)}
		>
			Summary
		</button>
		<button
			className={
				selectedText === 2
					? 'button__about--header--active margin__left--5'
					: 'button__about--header margin__left--5'
			}
			onClick={() => clickHandler(2)}
		>
			Background
		</button>
	</div>
)

export default ChangeTxtBtn

ChangeTxtBtn.propTypes = {
	selectedText: PropTypes.number.isRequired,
	clickHandler: PropTypes.func.isRequired
}
