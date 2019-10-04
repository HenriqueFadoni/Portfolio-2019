import React from 'react'

import AboutHeader from './AboutHeader/AboutHeader'
import Quote from './Quote/Quote'
import Steps from './Steps/Steps'
import Skills from './Skills/Skills'
import Footer from '../Footer/Footer'

const About = () => (
	<div className="about__container">
		<AboutHeader />
		<Quote />
		<Steps />
		<Skills />
		<Footer />
	</div>
)

export default About
