import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import App from './components/App';
import reducers from './bootstrap/reducers';

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
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
