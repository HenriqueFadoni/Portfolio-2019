import React from 'react'
import PropTypes from 'prop-types'

const StepItem = ({ title, number, message, index }) => (
	<div
		key={index}
		className="about-steps__item"
	>
		<div className="about-steps__item--title">
			<span>{number}</span>
			<h3>{title}</h3>
		</div>
		<div className="about-steps__item--paragraph">
			<p>{message}</p>
		</div>
	</div>
)

export default StepItem

StepItem.propTypes = {
	title: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired
}
