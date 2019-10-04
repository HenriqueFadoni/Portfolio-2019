import React from 'react'

import Slider from './Slider/Slider'
import PersonalImage from './PersonalImage/PersonalImage'

const AboutHeader = () => (
	<div className="about__header">
		<PersonalImage />
		<Slider />
	</div>
)

export default AboutHeader
