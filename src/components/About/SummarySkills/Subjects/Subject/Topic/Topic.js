import React from 'react'
import PropTypes from 'prop-types'

const Topic = ({ item, isActive }) => (
	<div
		className={
			isActive
				? 'about-subjects__item'
				: 'about-subjects__item--hidden'
		}
	>
		<h3>{item}</h3>
	</div>
)

export default Topic

Topic.propTypes = {
	item: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired
}
