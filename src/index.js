import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './view/Home';
import Mine from './view/Mine';
import Profile from './view/Profile';
import Layout from './view/Layout'

ReactDOM.render(
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/mine' component={Mine}></Route>
        <Route path='/profile' component={Profile}></Route>
      </Switch>
    </Layout>
  </Router>,
  document.getElementById('root')
);