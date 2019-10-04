import React, { useState, useEffect } from 'react'

import Subject from './Subject/Subject'
import { techList } from '../../../../constants'

const Subjects = () => {
	const [isActive, setIsActive] = useState(false)

	const scrollHandler = () => {
		if (window.scrollY >= 890) {
			setIsActive(true)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler)
		return () => window.removeEventListener('scroll', scrollHandler)
	})

	const renderSubjects = techList.map((tech, i) => (
		<Subject
			key={`${i}-${tech.title}`}
			title={tech.title}
			list={tech.list}
			isActive={isActive}
		/>
	))

	return (
		<div className="about-subjects__container">
			{renderSubjects}
		</div>
	)
}

export default Subjects
