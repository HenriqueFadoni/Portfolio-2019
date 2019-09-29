import React, { useEffect, lazy, Suspense } from 'react'
import {
	Route,
	Switch
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './sass/main.scss'
import Menu from './containers/Menu/Menu'
import LoadScreen from './containers/LoadScreen/LoadScreen'

const Home = lazy(() => import('./containers/Home/Home'))
const About = lazy(() => import('./containers/About/About'))
const Portfolio = lazy(() => import('./containers/Portfolio/Portfolio'))
const Contact = lazy(() => import('./containers/Contact/Contact'))


const App = () => {
	const scrollHandler = () => {
		// if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
			
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
						<Suspense fallback={<LoadScreen />}>
							<Switch location={location}>
								{routers}
							</Switch>
						</Suspense>
					</CSSTransition>
				</TransitionGroup>
			)} />
		</div>
	)
}

export default App
