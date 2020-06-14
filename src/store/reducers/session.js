import * as types from "../action-types";

let initState = {
  user: null,
  success: null, //成功提示
  error: null, //失败提示 
}

export default function (state = initState, action) {
  switch (action.type) {
    case types.SET_SESSION:
      return action.payload //整体覆盖
    default:
      return state;
  }
}

