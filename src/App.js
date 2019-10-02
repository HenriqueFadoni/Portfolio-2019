import React from 'react'
import {
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './sass/main.scss'
import Menu from './containers/Menu/Menu'

import Home from './containers/Home/Home'
import About from './containers/About/About'
import Portfolio from './containers/Portfolio/Portfolio'
import Contact from './containers/Contact/Contact'

const App = () => (
	<div className="App">
		<Menu />
		<TransitionGroup>
			<CSSTransition
				key={window.location.key}
				timeout={300}
				classNames="fade"
			>
				<Switch location={window.location}>
					<Route path="/" component={Home} exact />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/portfolio" component={Portfolio} />
					<Redirect to="/" />
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	</div>
)

export default App
