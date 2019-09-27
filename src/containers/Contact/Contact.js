import React from 'react'

import Header from './Header/Header'
import MapWrapper from './MapWrapper/MapWrapper'
import Content from './Content/Content'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
	return (
		<div className="contact__container">
			<Header />
			<MapWrapper />
			<Content />
			<Footer />
		</div>
	)
}

export default Contact
