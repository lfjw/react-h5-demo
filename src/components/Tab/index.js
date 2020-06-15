import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import './index.less'


/**
 *   activeClassName 路径激活，则加此属性
 *   exact 加此属性 不会一直选中 精确匹配
 */
class Tab extends Component {
  render() {
    return (
      <div className='tab'>
        <NavLink exact to='/' activeClassName='active'>
          <i className='iconfont icon-iconset0456'></i>
          <span>星球</span>
        </NavLink>
        <NavLink to='/profile' activeClassName='active'>
          <i className='iconfont icon-kecheng'></i>
          <span>课程</span>
        </NavLink>
        <NavLink to='/mine' activeClassName='active'>
          <i className='iconfont icon-wode'></i>
          <span>我的</span>
        </NavLink>
      </div>
    )
  }
}

export default connect()(Tab)