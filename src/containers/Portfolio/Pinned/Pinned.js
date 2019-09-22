import React from 'react';

import Title from './Title/Title'
import ProjectList from './ProjectList/ProjectList'

const Pinned = () => {
	const projects = [
		{ name: 'PathFinder', tag: 'React', repoLink: 'lala' }
	] // Max number of Pinned Projects is 5

	return (
		<div>
			<Title />
			<ProjectList projectList={projects} />
		</div>
	)
}

export default Pinned
