import React, { Component } from 'react'
import './index.less';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Mine extends Component {
  render() {
    const { session } = this.props

    const str = <div className='mine-top'>
      <div className='img'>头像</div>
      <Link to='/login'>
        <div className='text'>登录</div>
      </Link>
    </div>
    
    return (
      <div className='mine'>
        {(session && session.user) ? session.user : str}
      </div>
    )
  }
}
export default connect(state => state,)(Mine)

