import React from 'react'

import Schedule from './Schedule/Schedule'
import Email from './Email/Email'

const Content = () => {
	return (
		<div className="contact__content--container">
			<Email />
			<Schedule />
		</div>
	)
}

export default Content
