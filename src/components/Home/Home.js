import React, { useState, useEffect } from 'react'

import VideoBackground from './VideoBackground/VideoBackground'
import IntroTitle from './IntroTitle/IntroTitle'

const Home = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	useEffect(() => {
		const isResizing = e => setScreenWidth(window.innerWidth)
		window.addEventListener('resize', isResizing)

		return () => {
			window.removeEventListener('resize', isResizing)
		}
	}, [])

	return (
		<div className="home__container">
			{
				screenWidth > 500
					? <VideoBackground />
					: null
			}
			<IntroTitle />
		</div>
	)
}

export default Home
