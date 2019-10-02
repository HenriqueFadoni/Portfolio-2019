import React, { useState, useEffect } from 'react'

import MapBox from './MapBox/MapBox'

const MapWrapper = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	useEffect(() => {
		const isResizing = e => setScreenWidth(window.innerWidth)
		window.addEventListener('resize', isResizing)

		return () => {
			window.removeEventListener('resize', isResizing)
		}
	}, [])

	const styleWrap = {
		height: '100vh',
		width: '100%',
		position: 'relative',
		marginTop: 'none',
		marginBottom: 'none',
		overflow: 'hidden'
	}

	const styleResponsive = {
		display: 'none'
	}

	return (
		<div style={
			screenWidth < 1000
				? styleResponsive
				: styleWrap
		}>
			<MapBox />
		</div>
	)
}

export default MapWrapper
