import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    let { user, path, component: Comp } = this.props
    // Route 渲染三种方式 component render children
    if (user) {
      // 已登陆
      return <Route path={path} component={Comp}></Route>
    } else {
      // 
      return <Redirect to={{ pathname: '/login', state: { from: path } }}></Redirect>
    }
  }
}
export default connect(state => state.session)(PrivateRoute)