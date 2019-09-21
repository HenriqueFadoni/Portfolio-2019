import React from 'react'

import Header from './Header/Header'
import Quote from './Quote/Quote'
import Steps from './Steps/Steps'
import Skills from './Skills/Skills'

const About = () => {
	return (
		<div className="about__container">
			<Header />
			<Quote />
			<Steps />
			<Skills />
		</div>
	)
}

export default About
