import React from 'react'

import Schedule from './Schedule/Schedule'
import ContactInformation from './ContactInformation/ContactInformation'

const PersonalInfo = () => (
	<div className="contact__content--container">
		<ContactInformation />
		<Schedule />
	</div>
)

export default PersonalInfo
