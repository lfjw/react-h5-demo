import React, { Component, Fragment } from 'react';
import Tab from '../../components/Tab'
import '../../common/global.less';
import { validate } from '../../api/session'
import * as types from '../../store/action-types'
import store from '../../store'


export default class Layout extends Component {
  componentWillMount() {

    validate().then(res => {
      store.dispatch({
        type: types.SET_SESSION,
        payload: res
      })
    })

  }
  render() {
    return (
      <Fragment>
        {this.props.children}
        <Tab></Tab>
      </Fragment>
    )
  }
}