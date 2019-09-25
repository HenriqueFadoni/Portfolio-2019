import React from 'react';

import Title from './Title/Title'
import ProjectList from '../ProjectList/ProjectList'
import project1 from '../../../assets/images/project-1.png'

const Pinned = () => {
	const projects = [
		{
			name: 'PathFinder',
			tag: 'React',
			image: project1,
			repoLink: 'https://github.com/HenriqueFadoni/npm-library',
			webLink: 'https://www.npmjs.com/package/employ-fadoni-now'
		},
		{
			name: 'PathFinder',
			tag: 'React',
			image: project1,
			repoLink: 'https://github.com/HenriqueFadoni/npm-library',
			webLink: 'https://www.npmjs.com/package/employ-fadoni-now'
		},
	] // Max number of Pinned Projects is 5

	return (
		<div className="portfolio__pinned--container">
			<Title />
			<ProjectList projectList={projects} />
		</div>
	)
}

export default Pinned
