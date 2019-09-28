import React from 'react'

import GoogleMap from './GoogleMap/GoogleMap'

const MapWrapper = () => (
  <div style={{
    height: '100vh',
    width: '50%',
    position: 'relative',
    marginTop: 'none',
    marginBottom: 'none',
    overflow: 'hidden'
  }}>
    <GoogleMap />
  </div>
)

export default MapWrapper
