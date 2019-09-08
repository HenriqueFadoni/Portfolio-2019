import React from 'react';

import Button from './Button/Button';
import PersonalTxt from './PersonalTxt/PersonalTxt';
import ProfessionalTxt from './ProfessionalTxt/ProfessinalTxt';

const Slide = () => {


	return (
		<div className="about__slider--container">
			<ProfessionalTxt />
			<Button />
		</div>
	)
};

export default Slide;