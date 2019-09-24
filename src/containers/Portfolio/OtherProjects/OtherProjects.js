import React from 'react'

import ProjectList from '../Pinned/ProjectList/ProjectList'
import project1 from '../../../assets/images/project-1.png'

const OtherProjects = () => {
	const projectList = [
		{ name: 'PathFinder', tag: 'React', repoLink: project1 },
		{ name: 'PathFinder', tag: 'React', repoLink: project1 },
		{ name: 'PathFinder', tag: 'React', repoLink: project1 },
		{ name: 'PathFinder', tag: 'React', repoLink: project1 },
		{ name: 'PathFinder', tag: 'React', repoLink: project1 },
		{ name: 'PathFinder', tag: 'React', repoLink: project1 },
		{ name: 'PathFinder', tag: 'React', repoLink: project1 },
		{ name: 'PathFinder', tag: 'React', repoLink: project1 },
		{ name: 'PathFinder', tag: 'React', repoLink: project1 },
		{ name: 'PathFinder', tag: 'React', repoLink: project1 },
		{ name: 'PathFinder', tag: 'React', repoLink: project1 },
		{ name: 'PathFinder', tag: 'React', repoLink: project1 },
		{ name: 'PathFinder', tag: 'React', repoLink: project1 },
		{ name: 'PathFinder', tag: 'React', repoLink: project1 },
	]

	return (
		<div className="overall__container">
			<ProjectList projectList={projectList} />
		</div>
	)
}

export default OtherProjects
