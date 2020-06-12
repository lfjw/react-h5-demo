import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './view/Home';
import Mine from './view/Mine';
import Profile from './view/Profile';
import Layout from './view/Layout'

import store from "./store"; 
import { Provider } from "react-redux";

ReactDOM.render(
  // 仓库的属性store传给Provider
  // Provider 传给子集
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/mine' component={Mine}></Route>
          <Route path='/profile' component={Profile}></Route>
        </Switch>
      </Layout>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);