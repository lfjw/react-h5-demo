import { combineReducers } from 'redux'
import home from './home';
import session from './session'
import { connectRouter } from 'connected-react-router';
import history from '../../history';

let reducers = combineReducers({
  router: connectRouter(history),
  home,
  session,
});
export default reducers;