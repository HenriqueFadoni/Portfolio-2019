import React from 'react'

import Pinned from './Pinned/Pinned'
import OtherProjects from './OtherProjects/OtherProjects'
import Footer from '../Footer/Footer'

const Portfolio = () => {
	return (
		<div className="portfolio__container">
			<Pinned />
			<OtherProjects />
			<Footer />
		</div>
	)
}

export default Portfolio
