import * as types from '../action-types';
// 请求
import { getSliders, getLessons } from '../../api/home'

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

  },

  getLessons() {
    return function (dispatch, getState) {
      const { category, lessons: { offset, limit, hasMore, loading } } = getState().home;
      if (hasMore && !loading) {
        getLessons(category, offset, limit).then(payload => {
          dispatch({
            type: types.SET_HOME_LESSONS,
            payload
          })
        })
      }
    }

  },

  // 重新加载
  refreshLessons() {
    return function (dispatch, getState) {
      const { category, lessons: { limit, hasMore, loading } } = getState().home;
      if (hasMore && !loading) {
        getLessons(category, 0, limit).then(payload => {
          dispatch({
            type: types.REFRESH_HOME_LESSONS,
            payload
          })
        })
      }
    }

  },
}