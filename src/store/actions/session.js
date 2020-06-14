import * as types from '../action-types';
// 请求
import { reg } from '../../api/session'

import history from '../../history';

export default {
  reg(body) {
    return function (dispatch, getState) {
      reg(body).then(payload => {
        // {user, success, error}
        console.log(payload,'----');
        
        dispatch({
          type: types.SET_SESSION,
          payload
        })
        history.push('/login')
        // 注册成功，跳转到登录页登录
        // 注册失败
      })
    }
  }
}