import React from 'react'

const ContactFormInputs = ({ onChange }) => (
  <>
    <input
      name="name"
      type="text"
      className="contact-form__input"
      placeholder="Full Name"
      onChange={onChange}
      required
    />
    <input
      name="email"
      type="email"
      className="contact-form__input"
      placeholder="E-mail"
      onChange={onChange}
      required
    />
    <input
      name="company"
      type="text"
      className="contact-form__input"
      placeholder="Company Name"
      onChange={onChange}
      required
    />
    <input
      name="budget"
      type="number"
      className="contact-form__input"
      placeholder="Project Bugdet In US Dollars"
      onChange={onChange}
      required
    />
    <textarea
      name="message"
      className="contact-form__textarea"
      placeholder="Message / Additional Details"
      onChange={onChange}
      required
    />
    <button
      className="contact-form__submit"
    >
      SEND
    </button>
  </>
);

export default ContactFormInputs;
