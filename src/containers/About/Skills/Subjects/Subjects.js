import React from 'react'

import Subject from './Subject/Subject'

const Subjects = () => {
	const techList = [
		{
			title: 'Programming Languages',
			list: [
				'HTML',
				'CSS',
				'JavaScript ES8+',
				'Python',
				'Java',
				'C/C++'
			]
		},
		{
			title: 'Front-End',
			list: [
				'React',
				'Redux/SAGA',
				'React Native',
				'SASS',
				'TypeScript',
				'Prop-Types'
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

	const renderSubjects = techList.map((tech, i) => (
		<Subject 
			key={`${i}-${tech.title}`}
			title={tech.title}
			list={tech.list}
		/>
	))

	return (
		<div className="about-subjects__container">
			{renderSubjects}
		</div>
	)
}

export default Subjects
