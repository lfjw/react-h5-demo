import * as types from '../action-types';
import { getSliders, getLessons } from '../../api/home'

export default {
  // 改变课程目录
  changeCategory(category) {
    return {
      type: types.CHANGE_CATEGORY,
      payload: category
    }
  },
  // 接口请求轮播图
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
        // dispatch参数 就是action
        // action.type/action.payload
        // 加载loading
        dispatch({
          type: types.LESSONS_LOADING,
          //payload: true,
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
        // 清空list 加载loading
        dispatch({
          type: types.TOP_HOME_LESSONS,
        })
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