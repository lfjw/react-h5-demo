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

  // 上拉加载
  getLessons() {
    return function (dispatch, getState) {
      const { category, lessons: { offset, limit, hasMore, loading } } = getState().home;

      if (hasMore && !loading) {
        // 加载loading
        dispatch({
          type: types.LESSONS_LOADING
        })

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
      const { category, lessons: { limit, loading } } = getState().home;
      if (!loading) {
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