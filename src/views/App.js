import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import routes from '../route/routerConf'

import TimeLine from './timeLine/index'
import Pin from './pins/index'


import Header from '../containers/header/index'

import { HeaderLabel } from '../components/index'

import './App.scss';

import routerConfig from '../route/routerConf';

class App extends Component {


  render() {
    console.log(routes, 'routers')
    const routeCon = routes.map((item, idx) => (
      <Route
        key={`key${idx}`}
        path={item.path}
        // component={item.component}
        render={props => <item.component {...props}/>}
      ></Route>
    ))
    const { } = this.props
    return (
      <div className="app-container container">
        <Header />
  
        <main className='main-container'>

          <section className='main-content'>
            <Switch>
              {
                routeCon
              }

            </Switch>
          </section>

  
        </main>
      </div>
    );
  }
  
}

export default App;
