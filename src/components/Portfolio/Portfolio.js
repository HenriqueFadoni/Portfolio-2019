import React from 'react'

import PinnedProjects from './PinnedProjects/PinnedProjects'
import AllProjects from './AllProjects/AllProjects'
import Footer from '../Footer/Footer'

const Portfolio = () => (
	<div className="portfolio__container">
		<PinnedProjects />
		<AllProjects />
		<Footer />
	</div>
)

export default Portfolio
