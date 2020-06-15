import React, { Component } from 'react'
import './index.less';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Mine extends Component {
  render() {
    return (
      <div className='mine'>
        <div className='mine-top'>
          <div className='img'>头像</div>
          <Link to='/login'>
            <div className='text'>登录</div>
          </Link>
        </div>
      </div>
    )
  }
}
export default connect()(Mine)

