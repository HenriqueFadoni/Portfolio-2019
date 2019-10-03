import React, { useState } from 'react'
import { Marker, InteractiveMap } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const MapBox = () => {
	const [viewport, setViewport] = useState({
		latitude: -22.234171,
		longitude: -45.933201,
		trackResize: true,
		height: '100%',
		width: '100%',
		zoom: 5
	})

	const apiKey = 'pk.eyJ1IjoiZmFkb25pIiwiYSI6ImNrMTk4c3R2YzF6cWQzY3FkamhuMG5mcjIifQ.LfebauCCVH_wlLTS6a360A'
	return (
		<InteractiveMap
			{...viewport}
			mapboxApiAccessToken={apiKey}
			mapStyle="mapbox://styles/fadoni/ck19ezrc700z61dqhwp0zpwfp"
			onViewportChange={newViewport => {
				setViewport({
					...viewport,
					latitude: newViewport.latitude,
					longitude: newViewport.longitude,
					zoom: newViewport.zoom
				})
			}}
		>
			<Marker
				latitude={-22.234171}
				longitude={-45.933201}
			>
				<FontAwesomeIcon
					className="footer__icon"
					color="orange"
					size="3x"
					icon={faMapMarkerAlt}
				/>
			</Marker>
		</InteractiveMap>
	)
}

export default MapBox