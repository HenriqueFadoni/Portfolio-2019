import React from 'react'

import ProjectList from '../Pinned/ProjectList/ProjectList'
import Title from './Title/Title'
import project1 from '../../../assets/images/project-1.png'
import project2 from '../../../assets/images/project-2.png'

const OtherProjects = () => {
	const projectList = [
		{ name: 'Money Now', tag: 'React', repoLink: project2 },
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
