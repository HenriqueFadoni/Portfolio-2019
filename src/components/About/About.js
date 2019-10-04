import React from 'react'

import AboutHeader from './AboutHeader/AboutHeader'
import AnimatedQuote from './AnimatedQuote/AnimatedQuote'
import WorkSteps from './WorkSteps/WorkSteps'
import SummarySkills from './SummarySkills/SummarySkills'
import Footer from '../Footer/Footer'

const About = () => (
	<div className="about__container">
		<AboutHeader />
		<AnimatedQuote />
		<WorkSteps />
		<SummarySkills />
		<Footer />
	</div>
)

export default About
