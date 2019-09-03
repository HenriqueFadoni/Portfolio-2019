import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';

function App() {
  const routers = (
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  )

  return (
    <div className="App">
      {routers}
    </div>
  );
}

export default App;
