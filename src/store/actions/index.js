import * as types from '../action-types';
// 请求
import { getSliders } from '../../api/home'

export default {
  changeCategory(category) {
    return {
      type: types.CHANGE_CATEGORY,
      payload: category
    }
  },
  getSliders() {
    return function (dispatch, getState) {
      getSliders().then(res => {
        dispatch({
          type: types.SET_HOME_SLIDERS,
          payload: res
        })
      })

    }

  }
}