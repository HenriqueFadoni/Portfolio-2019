import React from 'react'

import ProjectList from '../Pinned/ProjectList/ProjectList'
import project1 from '../../../assets/images/project-1.png'
import Title from './Title/Title'

const OtherProjects = () => {
	const projectList = [
		{ name: 'Money Now', tag: 'React', repoLink: project1 },
		{ name: 'Crypto Currency App', tag: 'React Native', repoLink: project1 },
		{ name: 'NPM Library', tag: 'React', repoLink: project1 },
		{ name: 'Cocktail Finder', tag: 'React Native', repoLink: project1 },
		{ name: 'Burguer Builder', tag: 'React', repoLink: project1 },
		{ name: 'DashBoard', tag: 'React', repoLink: project1 }
	]

	return (
		<div className="overall__container">
			<Title />
			<ProjectList projectList={projectList} />
		</div>
	)
}

export default OtherProjects
