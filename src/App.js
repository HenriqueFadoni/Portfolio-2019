import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './sass/main.scss';

import Menu from './containers/Menu/Menu';
import Home from './containers/Home/Home';
import About from './containers/About/About';

function App() {
  const routers = (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </>
  );

  return (
    <div className="App">
      <Menu />
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
          >
            <Switch location={location}>
              {routers} 
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
}

export default App;
