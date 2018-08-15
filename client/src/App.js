import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';

import Planets from './pages/Planets';
import Vehicles from './pages/Vehicles';
import People from './pages/People';

const Home = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signin" component={Signin} />
      <Route path="/planets" exact component={Planets} />
      <Route path="/vehicles" exact component={Vehicles} />
      <Route path="/people" exact component={People} />
    </Switch>
  </Router>
);

export default Home;
