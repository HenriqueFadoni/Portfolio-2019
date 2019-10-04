import React from 'react'

import { stepsTextList as stepList } from '../../../constants'
import StepItem from './StepItem/StepItem'

const Steps = () => {
	const allSteps = stepList.map((item, i) => (
		<StepItem 
			key={`${i}-${item.title}`}
			title={item.title}
			number={item.number}
			message={item.message}
			index={i}
		/>
	))

	return (
		<div className="about-steps__container">
			{allSteps}
		</div>
	)
}

export default Steps
