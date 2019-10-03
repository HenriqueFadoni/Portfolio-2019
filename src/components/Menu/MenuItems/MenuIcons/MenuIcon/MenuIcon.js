import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuIcon = ({ index, route, icon }) => (
  <a
    key={index}
    href={route}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon
      className="menu__icon"
      color="white"
      size="3x"
      icon={icon}
    />
  </a>
)

export default MenuIcon

MenuIcon.propTypes = {
  index: PropTypes.number.isRequired,
  route: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}
