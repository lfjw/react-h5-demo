import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.less'

export default class Tab extends Component {
    render() {
        return <div className='tab'>
            {/* activeClassName 路径激活，则加此属性 */}
            {/*  exact 加此属性 不会一直选中 精确匹配 */}
            <NavLink exact to='/' activeClassName='active'>
                <i className='iconfont icon-iconset0456'></i>
                星球
            </NavLink>
            <NavLink to='/profile' activeClassName='active'>
                <i className='iconfont icon-kecheng'></i>
                课程
            </NavLink>
            <NavLink to='/mine' activeClassName='active'>
                <i className='iconfont icon-wode'></i>
                我的
            </NavLink>
        </div>
    }
}