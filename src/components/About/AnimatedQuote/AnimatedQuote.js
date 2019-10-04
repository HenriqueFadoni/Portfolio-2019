import React from 'react'

import StaticText from './StaticText/StaticText'
import InteractiveText from './InteractiveText/InteractiveText'

const AnimatedQuote = () => (
	<div className="about__quote--container">
		<div className="about__quote--text">
			<StaticText />
			<InteractiveText />
		</div>
	</div>
)
export default AnimatedQuote
