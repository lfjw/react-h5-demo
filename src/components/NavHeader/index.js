import React, { Component } from 'react'
import './index.less'
import { withRouter } from 'react-router-dom'
class NavHeader extends Component {
  render() {
    // 因为没有<Router></Router>包裹，所以不能直接使用history
    return (
      <div className='nav-header'>
        <span onClick={() => this.props.history.goBack()}>返回</span>
        {this.props.title}
      </div>
    )
  }
}

export default withRouter(NavHeader)