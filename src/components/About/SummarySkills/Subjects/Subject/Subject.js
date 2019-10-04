import React from 'react'
import PropTypes from 'prop-types'

import Topic from './Topic/Topic'

const Subject = ({ title, list, isActive }) => {
	const topicList = list.map((item, i) => (
		<Topic
			key={`${i}-${item}`}
			item={item}
			isActive={isActive}
		/>
	))

	return (
		<div>
			<div className="about-subjects__title subtitle--pacifico">
				<h2>{title}</h2>
			</div>
			<ul className="about-subjects__list">
				{topicList}
			</ul>
		</div>
	)
}

export default Subject

Subject.propTypes = {
	title: PropTypes.string.isRequired,
	list: PropTypes.arrayOf(PropTypes.string).isRequired,
	isActive: PropTypes.bool.isRequired
}
