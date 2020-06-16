import React, { Component } from 'react'
import './index.less';
import NavHeader from '../../components/NavHeader';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import session from '../../store/actions/session'
import Alert from '../../components/Alert'

class Login extends Component {
  onLogin = () => {
    const { login } = this.props;
    login({ username: this.phone.value, password: this.password.value })
  }
  render() {
    const alert = <Alert type={this.props.success ? 'success' : 'error'} message={this.props.success || this.props.error} />

    return (
      <div className='login'>
        <NavHeader title='登录'></NavHeader>
        <div className='login-bg'>
          <div className='img'>头像</div>
        </div>
        <input type='text' placeholder='手机号' ref={ref => this.phone = ref}></input>
        <input type='password' placeholder='密码' ref={ref => this.password = ref}></input>
        <Link to='/reg'>前往注册</Link>
        <button onClick={this.onLogin}>登&nbsp;&nbsp;录</button>
        {
          this.props.success || this.props.error ? alert : ""
        }
      </div>
    )
  }
}
export default connect(state => state.session, session)(Login)