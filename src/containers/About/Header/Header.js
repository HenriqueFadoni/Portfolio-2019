import React from 'react'

import Slide from './Slide/Slide'
import HenriquePhoto from '../../../assets/images/photo_me.jpg'

const Header = () => (
	<div className="about__header">
		<div className="about__header__image">
			<img src={HenriquePhoto} alt="Henrique, Software Developer" />
		</div>
		<Slide />
	</div>
)

export default Header
