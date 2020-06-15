import { Route, Switch } from 'react-router-dom';
import * as React from 'react';

import Home from '../Home';
import Mine from '../Mine';
import Profile from '../Profile';
import Detail from '../Detail';
import Login from '../Login';
import Reg from '../Reg';
import Layout from '../Layout'

import PrivateRoute from '../../components/PrivateRoute'

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}