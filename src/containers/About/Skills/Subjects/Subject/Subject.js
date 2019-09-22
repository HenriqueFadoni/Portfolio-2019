import React from 'react'
import PropTypes from 'prop-types'

const Subject = props => {
	const renderList = props.list.map((item, i) => (
		<div
			key={`${i}-${item}`}
			className={
				props.isActive
					? "about-subjects__item"
					: "about-subjects__item--hidden"
			}
		>
			<h3>{item}</h3>
		</div>
	))

	return (
		<div>
			<div className="about-subjects__title subtitle--pacifico">
				<h2>{props.title}</h2>
			</div>
			<div className="about-subjects__list">
				{renderList}
			</div>
		</div>
	)
}

export default Subject

Subject.prototype = {
	title: PropTypes.string.isRequired,
	list: PropTypes.arrayOf(PropTypes.string).isRequired
}
