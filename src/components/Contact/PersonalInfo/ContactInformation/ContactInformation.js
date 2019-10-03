import React from 'react'

import ContactInfoTitle from './ContactInfoTitle/ContactInfoTitle'
import Email from './Email/Email'
import PhoneNum from './PhoneNum/PhoneNum'
import Address from './Address/Address'

const ContactInformation = () => (
	<div className="contact__content--email">
		<ContactInfoTitle />
		<Email />
		<PhoneNum />
		<Address />
	</div>
)

export default ContactInformation
