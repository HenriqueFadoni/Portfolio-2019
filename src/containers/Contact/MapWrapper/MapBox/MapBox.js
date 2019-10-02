import React, { useState } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'

const MapBox = () => {
	const [viewport, setViewport] = useState({
		latitude: -22.234171,
		longitude: -45.933201,
		height: '100%',
		width: '100%',
		zoom: 7
	})

	const apiKey = 'pk.eyJ1IjoiZmFkb25pIiwiYSI6ImNrMTk4c3R2YzF6cWQzY3FkamhuMG5mcjIifQ.LfebauCCVH_wlLTS6a360A'
	return (
		<ReactMapGl
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
		</ReactMapGl>
	)
}

export default MapBox
