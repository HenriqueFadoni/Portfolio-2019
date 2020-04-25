import React, { useState } from 'react'
import { Marker, InteractiveMap } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import { apiKey } from '../../../../constants'

const MapBox = () => {
	const [viewport, setViewport] = useState({
		latitude: 43.651070,
		longitude: -79.347015,
		trackResize: true,
		height: '100%',
		width: '100%',
		zoom: 5
	})

	return (
		<InteractiveMap
			{...viewport}
			mapboxApiAccessToken={apiKey}
			mapStyle="mapbox://styles/fadoni/ck19ezrc700z61dqhwp0zpwfp"
			onViewportChange={newViewport => {
				setViewport({
					...viewport,
					latitude: newViewport.latitude,
					longitude: newViewport.longitude
				})
			}}
		>
			<Marker
				latitude={44.25}
				longitude={-79.5832}
			>
				<FontAwesomeIcon
					color="white"
					size="3x"
					icon={faMapMarkerAlt}
				/>
			</Marker>
		</InteractiveMap>
	)
}

export default MapBox
