import React from 'react'

import GoogleMap from './GoogleMap/GoogleMap'

const MapWrapper = () => (
	<div style={{
		height: '100vh',
		width: '100%',
		position: 'relative',
		marginTop: 'none',
		marginBottom: 'none',
		overflow: 'hidden'
	}}>
		<GoogleMap />
	</div>
)

export default MapWrapper
