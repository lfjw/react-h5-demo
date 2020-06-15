// 创建仓库
import { createStore, applyMiddleware, compose } from "redux";
// 合并过来的
import reducers from "./reducers";

//thunk 可以在 actionCreator 中返回一个promise对象，他会等待成功后将成功后的结果派发出去
import promise from 'redux-promise';
// thunk 可以在 actionCreator 中返回一个函数，将函数执行，并传入dispatch和getState两个参数给这个函数，我们可以在任意时候dispatch
import thunk from 'redux-thunk';
// 操作日志
import logger from 'redux-logger';

import { routerMiddleware } from 'connected-react-router'
import history from '../history';
const router = routerMiddleware(history)

// applyMiddleware 中间件
// 为什么要使用中间件
// 为了能让我们派发function 
// applyMiddleware 导出数组
// [promise,thunk, logger](dispatch)
// let store = createStore(reducers, applyMiddleware(promise, thunk, logger, routerMiddleware(history))) 
const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      router,
      promise, thunk, logger,
    ),
  ),
)
window.store = store;
export default store;