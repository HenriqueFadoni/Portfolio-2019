import React from 'react'

import ProjectList from '../Pinned/ProjectList/ProjectList'
import Title from './Title/Title'

import project1 from '../../../assets/images/project-1.png'
import project2 from '../../../assets/images/project-2.png'
import project4 from '../../../assets/images/project-4.png'
import project5 from '../../../assets/images/project-5.png'

const OtherProjects = () => {
	const projectList = [
		{ 
			name: 'Money Now', 
			tag: 'React', 
			image: project2,
			repoLink: 'https://github.com/HenriqueFadoni/money-now',
			webLink: 'https://henriquefadoni.github.io/money-now/'
		},
		{ 
			name: 'Crypto Currency App',
			tag: 'React Native',
			image: project1, 
			repoLink: 'https://github.com/HenriqueFadoni/crypto-currency-app',
			webLink: false
		},
		{ 
			name: 'NPM Library',
			tag: 'React',
			image: project4 ,
			repoLink: 'https://github.com/HenriqueFadoni/npm-library',
			webLink: 'https://www.npmjs.com/package/employ-fadoni-now'
		},
		{ 
			name: 'Cocktail Finder',
			tag: 'React Native',
			image: project1,
			repoLink: 'https://github.com/HenriqueFadoni/CocktailFinder-Interview',
			webLink: false
		},
		{ 
			name: 'Burguer Builder',
			tag: 'React',
			image: project5,
			repoLink: 'https://github.com/HenriqueFadoni/the-burguer-builder',
			webLink: 'https://react-my-burger-fadoni.firebaseapp.com/'
		},
		{ 
			name: 'DashBoard',
			tag: 'React',
			image: project1, 
			repoLink: 'https://github.com/HenriqueFadoni/dashboard',
			webLink: false
		}
	]

	return (
		<div className="overall__container">
			<Title />
			<ProjectList projectList={projectList} />
		</div>
	)
}

export default OtherProjects
