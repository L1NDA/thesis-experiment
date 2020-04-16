import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home.js';
import Description from './Description.js';
import Tutorial from './Tutorial.js';
import TrialOne from './TrialOne.js';
import TrialTwo from './TrialTwo.js';
import * as serviceWorker from './serviceWorker';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/description' component={Description}/>
      <Route path='/tutorial' component={Tutorial}/>
      <Route path='/trial-1' component={TrialOne}/>
      <Route path='/trial-2' component={TrialTwo}/>
    </Switch>
  </Router>
)

ReactDOM.render(
  <App/>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
