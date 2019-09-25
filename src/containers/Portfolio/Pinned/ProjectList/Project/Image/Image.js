import React, { useState } from 'react'

import Options from './Options/Options'

const Image = props => {
  const {
    image,
    repoLink,
    webLink
  } = props
  const [show, setShow] = useState(false);

  const onHover = () => setShow(true)
  const onHoverLeave = () => setShow(false)

  return (
    <div
      className="portfolio__pinned--item-img"
      onMouseEnter={onHover}
      onMouseLeave={onHoverLeave}
    >
      {
        show
          ? <Options repo={repoLink} web={webLink} />
          : null
      }
      <img src={image} alt="Project Image" />
    </div>
  )
}

export default Image