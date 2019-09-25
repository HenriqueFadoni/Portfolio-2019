import React, { useState, useEffect } from 'react'

import Subject from './Subject/Subject'

const Subjects = () => {
	const [isActive, setIsActive] = useState(false)
	const techList = [
		{
			title: 'Programming Languages',
			list: [
				'JavaScript ES8+',
				'Python',
				'Java',
				'C/C++'
			]
		},
		{
			title: 'Front-End',
			list: [
				'HTML',
				'CSS',
				'React',
				'Redux/SAGA',
				'React Native',
				'SASS',
				'TypeScript'
			]
		},
		{
			title: 'Back-End',
			list: [
				'Django',
				'Node.js'
			]
		},
		{
			title: 'Testing',
			list: [
				'Jest',
				'Ensyme'
			]
		},
		{
			title: 'Version Control',
			list: [
				'GitHub',
				'BitBucket'
			]
		},
		{
			title: 'Bonus',
			list: [
				'Zepeling',
				'SCRUM',
				'Agile'
			]
		}
	]

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
