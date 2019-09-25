import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Options = props => (
  <div className="portfolio__options">
    <a
      href="https://github.com/HenriqueFadoni"
      target="_blank"
      rel="noopener noreferrer"
      className="margin__right--3"
    >
      <FontAwesomeIcon
        className="portfolio__icon"
        color="#ff581a"
        size="4x"
        icon={faGithubAlt}
      />
    </a>
    <a
      href="https://github.com/HenriqueFadoni"
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
  </div>
)

export default Options
