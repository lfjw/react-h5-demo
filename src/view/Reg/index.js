import React, { Component } from 'react'
import './index.less';
import NavHeader from '../../components/NavHeader';
import { connect } from "react-redux";
import actions from '../../store/actions/session'
import Alert from '../../components/Alert'

class Reg extends Component {
  reg = (event) => {
    let username = this.username.value;
    let password = this.password.value;
    this.props.reg({
      username,
      password
    })
  }
  render() {
    const alert = <Alert type={this.props.success ? 'success' : 'error'} message={this.props.success || this.props.error} />
    return (
      <div className='reg'>
        <NavHeader title='注册'></NavHeader>
        <div className='reg-bg'>
          <div className='img'>头像</div>
        </div>
        <input ref={ref => this.username = ref} type='text' placeholder='手机号'></input>
        <input ref={ref => this.password = ref} type='password' placeholder='密码'></input>
        <button onClick={this.reg}>注&nbsp;&nbsp;册</button>
        {
          this.props.success || this.props.error ? alert : ""
        }
      </div>
    )
  }
}

export default connect(state => state.session, actions)(Reg)