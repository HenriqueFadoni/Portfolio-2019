import React, { useEffect } from 'react'
import {
	Route,
	Switch
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './sass/main.scss'

import Menu from './containers/Menu/Menu'
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Contact from './containers/Contact/Contact'
import Portfolio from './containers/Portfolio/Portfolio'

const App = () => {

	const scrollHandler = () => {
		// if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		// 	console.log('btn')
		// }
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler)
		return () => window.removeEventListener('scroll', scrollHandler)
	})

	const routers = (
		<>
			<Route path="/" component={Home} exact />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			<Route path="/portfolio" component={Portfolio} />
		</>
	)

	return (
		<div className="App">
			<Menu />
			<Route render={({ location }) => (
				<TransitionGroup>
					<CSSTransition
						key={location.key}
						timeout={300}
						classNames="fade"
					>
						<Switch location={location}>
							{routers}
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			)} />
		</div>
	)
}

export default App
