import {createStore, applyMiddleware } from "redux"; // 创建仓库
import reducers from "./reducers"; // 合并过来的

import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// applyMiddleware 中间件
// 为什么要使用中间件
// 为了能让我们派发function 
// applyMiddleware 导出数组
// [promise,thunk, logger](dispatch)
let store = createStore(reducers, applyMiddleware(promise,thunk, logger))
window.store = store;
export default store;