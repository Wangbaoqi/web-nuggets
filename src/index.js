import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './views/App';
import * as serviceWorker from './serviceWorker';
import './fonts/font-awesome/scss/font-awesome.scss'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { renderRoutes } from "react-router-config";

import routerConf from './route/routerConf'

import { createStore } from './redux/index'

import reducer from './reducers/index'

import Provider from './redux/lib/provider'


const store = createStore(reducer)

console.log(store);






ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* {renderRoutes(routerConf)} */}
      {/* <Switch>
        <Route path='/' component={App}></Route>
      </Switch> */}
      <App/>
    </Router>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
