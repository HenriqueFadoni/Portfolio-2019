import React, { useState } from 'react'
import { Marker, StaticMap } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

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
		<StaticMap
			{...viewport}
			mapboxApiAccessToken={apiKey}
			mapStyle="mapbox://styles/fadoni/ck19ezrc700z61dqhwp0zpwfp"
			onViewportChange={viewport => {
				setViewport(viewport)
			}}
		>
			<Marker
				latitude={-22.234171}
				longitude={-45.933201}
			>
				<div className="map--marker"></div>
			</Marker>
		</StaticMap>
	)
}

export default MapBox
