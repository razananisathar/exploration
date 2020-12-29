import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import HomePage from './containers/HomePage';
import TimeHomePage from './containers/time/TimeHomePage';
// import ResetPasswordPage from './containers/ResetPasswordPage';
import NotFoundPage from './containers/NotFoundPage';
import ProtectedRoute from './protected-routes';

const App = (props) => (
  <div id="app" className="main-container">
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      {/* <Route path="/resetpassword" exact component={ResetPasswordPage} /> */}
      <ProtectedRoute exact path="/time/home" component={TimeHomePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
