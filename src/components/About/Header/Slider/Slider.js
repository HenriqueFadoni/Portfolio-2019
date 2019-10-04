import React, { useState } from 'react'

import ChangeTxtBtn from './ChangeTxtBtn/ChangeTxtBtn'
import SliderText from './SliderText/SliderText'

import { sliderWrittenContent } from '../../../../constants'

const Slider = () => {
	const [selectedText, setSelectedText] = useState(1)

	const changeText = val => {
		if (val === 1) {
			setSelectedText(1)
		} else {
			setSelectedText(2)
		}
	}

	return (
		<div className="about__header__slider--container">
			{
				selectedText === 1
					? <SliderText {...sliderWrittenContent.Personal} />
					: <SliderText {...sliderWrittenContent.Professional} />
			}
			<ChangeTxtBtn
				selectedText={selectedText}
				clickHandler={changeText}
			/>
		</div>
	)
}

export default Slider
