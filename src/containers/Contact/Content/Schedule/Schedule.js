import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons'

const Content = () => {
  return (
    <div className="contact__content--schedule">
      <a
        href="https://calendly.com/henriquefadoni"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          color="white"
          size="10x"
          icon={faCalendarAlt}
        />
      </a>
      <h1>Schedule an Interview</h1>
    </div>
  )
}

export default Content
