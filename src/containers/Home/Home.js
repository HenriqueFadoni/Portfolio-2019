import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import VideoBackground from './VideoBackground/VideoBackground'
import Text from './MainText/MainText'

const Home = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)
	const [nextPage, setNextPage] = useState(false)

	const scrollHandler = () => {
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
			setNextPage(true)
		} else if (nextPage) {
			setNextPage(false)
		}
	}

	useEffect(() => {
		const isResizing = e => setScreenWidth(window.innerWidth)
		window.addEventListener('resize', isResizing)
		window.addEventListener('scroll', scrollHandler)

		return () => {
			window.removeEventListener('resize', isResizing)
			window.removeEventListener('scroll', scrollHandler)
		}
	}, [])

	if (!nextPage) {
		return (
			<div className="home__container">
				{
					screenWidth > 500
						? <VideoBackground />
						: null
				}
				<Text />
			</div>
		)
	} else {
		return <Redirect from="/" to="/about" />
	}
}

export default Home
