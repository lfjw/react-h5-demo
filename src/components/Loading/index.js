import React, { Component } from 'react';
import './index.less'
import loading from './images/loading.svg'

export default class Loading extends Component {
  render() {
    return (
      <div className='loading'><img alt='加载' src={loading} /> Loading...</div>
    )
  }
}