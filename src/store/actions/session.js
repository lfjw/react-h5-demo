import * as types from '../action-types';
import { reg, login } from '../../api/session'
import { push } from "connected-react-router";
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
          // push 返回的是一个函数 { type: xx, payload :{methods: push}}
          dispatch(push('/login'))
        } else {
          console.log('注册失败');
        }


      })
    }
  },

  login(body) {
    return function (dispatch, getState) {
      login(body).then(res => {
        dispatch({
          type: types.SET_SESSION,
          payload: res
        })
        if (!res.error) {
          let state = getState().router.location.state
          let target = state ? state.from : '/mine'
          console.log('登录成功',target);
          dispatch(push(target))
        } else {
          console.log('登录失败');
        }
      })
    }
  }
}