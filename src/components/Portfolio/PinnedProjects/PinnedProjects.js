import React from 'react'

import PinnedTitle from './PinnedTitle/PinnedTitle'
import ProjectList from '../ProjectList/ProjectList'

import { pinnedPortfolioProjects } from '../../../constants'

const PinnedProjects = () => (
	<div className="portfolio__pinned--container">
		<PinnedTitle />
		<ProjectList projectList={pinnedPortfolioProjects} />
	</div>
)

export default PinnedProjects
