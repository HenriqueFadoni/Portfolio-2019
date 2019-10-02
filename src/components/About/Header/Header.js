import React from 'react'

import Slide from './Slide/Slide'
import PersonalImage from './PersonalImage/PersonalImage'

const Header = () => (
	<div className="about__header">
		<PersonalImage />
		<Slide />
	</div>
)

export default Header
