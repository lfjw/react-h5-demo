import { combineReducers } from 'redux'
import home from './home';
import session from './session'
// 合并
export default combineReducers({
  home,
  session
})