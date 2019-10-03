import React from 'react'

import ProjectList from '../ProjectList/ProjectList'
import AllProjectsTitle from './AllProjectsTitle/AllProjectsTitle'

import { portfolioAllProjects } from '../../../constants'

const AllProjects = () => (
	<div className="overall__container">
		<AllProjectsTitle />
		<ProjectList projectList={portfolioAllProjects} />
	</div>
)

export default AllProjects
