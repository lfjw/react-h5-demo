import * as types from '../action-types';
// 请求
import { reg, login } from '../../api/session'

export default {
  reg(body) {
    return function (dispatch, getState) {
      reg(body).then(payload => {
        // {user, success, error}
        dispatch({
          type: types.SET_SESSION,
          payload
        })

        if (!payload.error) {
          console.log('跳转到登录页面---');
          
        }else{
          console.log('注册失败');
        }

        // TODO 未实现redux跳转路由

        // 注册成功，跳转到登录页登录
        // 注册失败
      })
    }
  },

  login(body) {
    return function (dispatch, getState) {
      login(body).then(payload => {
        dispatch({
          type: types.SET_SESSION,
          payload
        })
        if (!payload.error) {
          console.log('登录成功');
        }else{
          console.log('登录失败');
        }


      })
    }
  }
}