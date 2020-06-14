import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line no-unused-vars
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './view/Home';
import Detail from './view/Detail'
import Mine from './view/Mine';
import Profile from './view/Profile';
import Layout from './view/Layout'
import Login from './view/Login'
import Reg from './view/Reg'

import store from "./store";
import { Provider } from "react-redux";
import PrivateRoute from './components/PrivateRoute'


// 为了在redux使用router 替换掉Router
// TODO 问题解决

// eslint-disable-next-line no-unused-vars
import { ConnectedRouter } from 'react-router-redux'
//import history from './history';

ReactDOM.render(
  // 仓库的属性store传给Provider
  // Provider 传给子集
  <Provider store={store}>
    <Router>
      {/* <ConnectedRouter history={history}> */}
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <PrivateRoute path='/mine' component={Mine}></PrivateRoute>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/detail/:id' component={Detail}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/reg' component={Reg}></Route>
        </Switch>
      </Layout>
      {/* </ConnectedRouter> */}
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);