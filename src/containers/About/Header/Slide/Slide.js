import React, { useState } from 'react';

import Button from './Button/Button';
import PersonalTxt from './PersonalTxt/PersonalTxt';
import ProfessionalTxt from './ProfessionalTxt/ProfessinalTxt';

const Slide = () => {
	const [selectedText, setSelectedText] = useState(1);

	const changeText = val => {
		if (val === 1) {
			setSelectedText(1);
		} else {
			setSelectedText(2);
		}
	}

	return (
		<div className="about__header__slider--container">
			<ProfessionalTxt />
			<Button 
				selectedText={selectedText}
				clickHandler={changeText}
			/>
		</div>
	)
};

export default Slide;