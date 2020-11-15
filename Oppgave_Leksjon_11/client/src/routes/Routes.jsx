import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import NewPoll from '../pages/NewPoll';
import ActivePoll from '../pages/ActivePoll';
import LogIn from '../pages/LogIn';

const Routes = () => {
  const [currentUser, setcurrentUser] = useState({
    username: 'Test',
    id: '5fb1a9096c778d37041b0775', // Endre denne til en bruker id som er lagret i databasen
  });
  const [currentPoll, setCurrentPoll] = useState('');

  return (
    <Router>
      <MainLayout currentUser={currentUser}>
        <Switch>
          <Route exact path="/">
            <Home setCurrentPoll={setCurrentPoll} />
          </Route>
          <Route exact path="/newpoll">
            <NewPoll currentUser={currentUser} />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <LogIn setcurrentUser={setcurrentUser} />
          </Route>
          <Route exact path="/activepoll">
            <ActivePoll currentPoll={currentPoll} />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default Routes;
