import React from 'react'

import GoogleMap from './GoogleMap/GoogleMap'

const MapWrapper = () => (
  <div style={{
    height: '300px',
    weight: '100%',
    marginTop: '100px',
    position: 'relative',
    marginTop: 'none',
    marginBottom: 'none',
    overflow: 'hidden'
  }}>
    <GoogleMap />
  </div>
)

export default MapWrapper
