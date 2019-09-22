import React from 'react'

import Header from './Header/Header'
import Quote from './Quote/Quote'
import Steps from './Steps/Steps'
import Skills from './Skills/Skills'
import Footer from './Footer/Footer'

const About = () => {
	return (
		<div className="about__container">
			<Header />
			<Quote />
			<Steps />
			<Skills />
			<Footer />
		</div>
	)
}

export default About
