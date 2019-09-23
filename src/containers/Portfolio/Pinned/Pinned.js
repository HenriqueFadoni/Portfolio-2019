import React from 'react';

import Title from './Title/Title'
import ProjectList from './ProjectList/ProjectList'
import project1 from '../../../assets/images/project-1.png'

const Pinned = () => {
	const projects = [
		{ name: 'PathFinder', tag: 'React', repoLink: project1 },
		{ name: 'PathFinder', tag: 'React', repoLink: project1 },
	] // Max number of Pinned Projects is 5

	return (
		<div className="portfolio__pinned--container">
			<Title />
			<ProjectList projectList={projects} />
		</div>
	)
}

export default Pinned
