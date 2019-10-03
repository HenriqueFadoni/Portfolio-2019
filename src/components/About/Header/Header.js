import React from 'react'

import Slider from './Slider/Slider'
import PersonalImage from './PersonalImage/PersonalImage'

const Header = () => (
	<div className="about__header">
		<PersonalImage />
		<Slider />
	</div>
)

export default Header
