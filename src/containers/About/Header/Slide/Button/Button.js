import React from 'react'

const Button = props => (
	<div className="about__header__button--container">
		<button
			className={
				props.selectedText === 1
					? 'button__about--header--active'
					: 'button__about--header'
			}
			onClick={() => props.clickHandler(1)}
		>
			Summary
		</button>
		<button
			className={
				props.selectedText === 2
					? 'button__about--header--active margin__left--5'
					: 'button__about--header margin__left--5'
			}
			onClick={() => props.clickHandler(2)}
		>
			Professional Background
		</button>
	</div>
)

export default Button
