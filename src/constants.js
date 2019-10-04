// Imports
import project1 from './assets/images/project-1.png'
import project2 from './assets/images/project-2.png'
import project4 from './assets/images/project-4.png'
import project5 from './assets/images/project-5.png'

// Constants
export const apiKey = 'pk.eyJ1IjoiZmFkb25pIiwiYSI6ImNrMTk4c3R2YzF6cWQzY3FkamhuMG5mcjIifQ.LfebauCCVH_wlLTS6a360A'

// Pinned Portfolio Projects ( MAX: 5 ) 
export const pinnedPortfolioProjects = [
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
	}
]

// All Portfolio Projects
export const portfolioAllProjects = [
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
		image: project4,
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

// Slider Text
export const sliderWrittenContent = {
	Personal: {
		title: 'Brief Summary',
		paragraph: `I am a Software Developer who has developed products mainly for Startups and Law Offices. Moreover,
		I specialize in building applications specific to the business needs of my clients and much more.
		Nonetheless, I have done work in Mobile Applications Creation and Web Development`
	},
	Professional: {
		title: 'Professional Background',
		paragraph: `My journey into programming began in 2011, before High School, back then I had limitless adventures creating small games in Unity 3D.
		Due to my coding passion, I did a three-year course degree in Computer Science where I learned the basic concepts in programming and in
		Web as well as Mobile Development. Since then, I had worked mainly remotely for companies in Europe and Brazil.
		I am passionate about learning new technologies and being challenged`
	}
}

// Steps Text

export const stepsTextList = [
	{
		number: '01.',
		title: 'Research',
		message: `
			In-depth analysis of the client's needs and requirements. 
			Leading to extensive learning about the subject matter until 
			becoming ultimately familiar with the topic. Plan and determine 
			the best approach to the specific task proposed by the customer.
		`
	},
	{
		number: '02.',
		title: 'Design',
		message: `
			Designing, in a nutshell, comprise not only from determining the 
			superficial appearance of a product. But also by involving market 
			research, technical research, design of a concept, and prototype mockup. 
			It is worth saying designing is a cross-functional process which co-depend 
			in other areas.
		`
	},
	{
		number: '03.',
		title: 'Develop',
		message: `
			All the data collected during the research and design phases, including 
			materials and methods, are then manipulated for the production of specific 
			profitable products for the customer.
		`
	}
]

// Technologies

export const techList = [
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
