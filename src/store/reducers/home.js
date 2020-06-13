import * as types from "../action-types";

let initState = {
  category: 'all', // 这里存放的是当前课程分类
  sliders: [], // 此处放置轮播图的数据
}

export default function (state = initState, action) {
  switch (action.type) {
    case types.CHANGE_CATEGORY:
      return { ...state, category: action.payload }
    case types.SET_HOME_SLIDERS:
      return { ...state, sliders: action.payload }
    default:
      return state;
  }
}

/**
 * (previousState, action) => newState
 * 函数特征
 * 纯函数，返回新对象，不能改变原有的值
 * 不可变 immutability
 * 突变 mutation
 */


