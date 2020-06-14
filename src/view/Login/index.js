import React, { Component } from 'react'
import './index.less';
import NavHeader from '../../components/NavHeader';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        <NavHeader title='登录'></NavHeader>
        <div className='login-bg'>
          <div className='img'>头像</div>
        </div>
        <input type='text' placeholder='手机号'></input>
        <input type='text' placeholder='密码'></input>
        <Link to='/reg'>前往注册</Link>
        <button>登&nbsp;&nbsp;录</button>
      </div>
    )
  }
}