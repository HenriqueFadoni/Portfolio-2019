import React from 'react'
import PropTypes from 'prop-types'

const SliderText = ({ title, paragraph }) => (
	<div className="about__header__slider--text color--white">
		<h1>{title}</h1>
		<p>{paragraph}</p>
	</div>
)

export default SliderText

SliderText.propTypes = {
	title: PropTypes.string.isRequired,
	paragraph: PropTypes.string.isRequired
}
