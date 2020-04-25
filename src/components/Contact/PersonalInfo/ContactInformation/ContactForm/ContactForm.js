import React, { useState } from 'react'
import axios from 'axios'

import ContactFormInputs from './ContactFormInputs/ContactFormInputs'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const url = 'https://a3euwetft5.execute-api.us-east-1.amazonaws.com/test1/';
    await axios.post(url, {
      name, email, company, budget, message
    });
  }

  const onChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'company':
        setCompany(event.target.value);
        break;
      case 'budget':
        setBudget(event.target.value);
        break;
      case 'message':
        setMessage(event.target.value);
        break;
      default:
        return;
    }
  }

  return (
    <form
      className="contact-form__container"
      onSubmit={onSubmit}
    >
      <ContactFormInputs onChange={onChange} />
    </form>
  );
}

export default ContactForm
