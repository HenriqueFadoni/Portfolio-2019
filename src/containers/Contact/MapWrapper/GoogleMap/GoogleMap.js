import React from 'react'

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = props => (
  <Map
    google={props.google}
    zoom={14}
    initialCenter={{
      lat: -22.234171,
      lng: -45.933201
    }}
  >
    <Marker
      name={'Current location'}
      position={{
        lat: -22.234171,
        lng: -45.933201
      }}
    />
  </Map>
)

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAqSFNIWTmJ5Pyu024OuJtnVWH_rOtD-s8'
})(GoogleMap)
