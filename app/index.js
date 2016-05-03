import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import App from './components/App';
import styles from './styles.scss';
import { loading } from './reducers';
import { user, repos } from './reducers/github';

const store = createStore(
  combineReducers({
    users: user,
    repos: repos,
    routing: routerReducer
  }),
  applyMiddleware(thunkMiddleware, promise, createLogger())
);
const history = syncHistoryWithStore(browserHistory, store);

const main = document.createElement('div');
ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  main
);
document.body.appendChild(main);
