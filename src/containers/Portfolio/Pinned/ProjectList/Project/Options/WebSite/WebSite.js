import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const WebSite = props => (
  <a
    href={props.web}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon
      className="portfolio__icon"
      color="#ff581a"
      size="4x"
      icon={faArrowAltCircleRight}
    />
  </a>
)

export default WebSite