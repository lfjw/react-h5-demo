import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import history from './history';
import App from './view/App';

ReactDOM.render(
  // 仓库的属性store传给Provider
  // Provider 传给子集
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('root')
);