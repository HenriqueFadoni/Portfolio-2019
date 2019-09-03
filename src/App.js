import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './sass/main.scss';

import Home from './containers/Home/Home';

function App() {
  const routers = (
    <Switch>
      <Route path="/" component={Home} exact />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <div className="App">
      {routers}
    </div>
  );
}

export default App;
