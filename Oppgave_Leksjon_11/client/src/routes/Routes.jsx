import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import NewPoll from '../pages/NewPoll';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/newpoll">
          <NewPoll />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
