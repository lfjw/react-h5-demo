import * as types from "../action-types";

let initState = {
  category: 'all', // 这里存放的是当前课程分类
  sliders: [], // 此处放置轮播图的数据
  lessons: { // 定义数据结构
    list: [], //课程列表数据
    hasMore: true, // 是否还有数据，上拉加载...
    offset: 0,// 取下一页数据偏移量
    limit: 5, // 每页条数
    loading: false, //上拉加载...

  }
}

export default function (state = initState, action) {
  switch (action.type) {
    case types.CHANGE_CATEGORY:
      return { ...state, category: action.payload }

    case types.SET_HOME_SLIDERS:
      return { ...state, sliders: action.payload }

    case types.LESSONS_LOADING:
      return {
        // TODO 延伸扩展一下action.payload
        ...state, lessons: {
          ...state.lessons,
          loading: true
          // action.payload
        }
      }

    case types.TOP_HOME_LESSONS:
      return {
        ...state, lessons: {
          ...state.lessons,
          list: [],
          loading: true,
          offset: 0,
          hasMore: true
        }
      }
    case types.SET_HOME_LESSONS:
      return {
        ...state, lessons: {
          ...state.lessons,
          list: [...state.lessons.list, ...action.payload.list],
          hasMore: action.payload.hasMore,
          offset: state.lessons.offset + action.payload.list.length,
          loading: false, //上拉加载...
      
        }
      }

    case types.REFRESH_HOME_LESSONS:
      return {
        ...state, lessons: {
          ...state.lessons,
          list: action.payload.list,
          hasMore: action.payload.hasMore,
          offset: action.payload.list.length,
          loading: false, //上拉加载...
      
        }
      }
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


