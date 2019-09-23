import React from 'react'

import Pinned from './Pinned/Pinned'
import Overall from './Overall/Overall'
import Footer from '../../components/Footer/Footer'

const Portfolio = () => {
	return (
		<div className="portfolio__container">
			<Pinned />
			<Overall />
			<Footer />
		</div>
	)
}

export default Portfolio
