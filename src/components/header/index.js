import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import classNames from 'classnames'
import { navList } from '../../utils/enumConfig'

import PropTypes from 'prop-types'

import './index.scss'

export default class Header extends Component {
  

  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }


  // changeTheme() {
  //   const { onChange } = this.props

  //   if(onChange) {
  //     onChange('blue')
  //   }
  // }

  handleNavActive(id) {
    console.log(id, 'is');
    this.setState({
      activeIndex: id
    })
  }

  render() {
    console.log(this.props, 'header props');
    const { themeColor = '' } = this.props
    const { activeIndex = 0 } = this.state


    const navItem = (navList || []).map((item, idx) => {
      
      const className = classNames({
        'nav-item': true,
        'active': idx === activeIndex
      })
      
      return (
        <li className={className} key={`nav-${idx}`} onClick={this.handleNavActive.bind(this, idx)}>
          <Link to={item.path}>{item.title}</Link>
        </li>
    )})


    return (
      <header className='header-container main-header'>
        <div className='container'>

          <a className='logo' href="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg">
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt=""/>
          </a>
          <nav className='main-nav' role='navigation'>
            <ul className='nav-list'>
              <li className='main-nav-item'>
                <div className='show-phone-menu' style={{ display: 'none'}}></div>
                <ul className='phone-hide'>
                  {navItem}
                </ul>
              </li>
              <li className='nav-item search'>
                <form role='' className='form-search'>
                  <input type='search' className='search-input' placeholder='搜索掘金'/>
                  <img className='search-icon' src='https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg' alt='search'/>
                </form>
              </li>
              <li className='nav-item add'>
                <div className='add-group'>
                  <button className='add-btn'>写文章</button>
                  <div className='more'>
                    <i className='fa fa-angle-down'></i>
                  </div>
                </div>
              </li>
              <li className='nav-item notification'>
                <i className='fa fa-bell'></i>
              </li>
              <li className='nav-item menu'>
                <div className='avatar'></div>
                <img src="" alt=""/>
                <i className='fa fa-user-o'></i>
              </li>
            </ul>
          </nav>
        </div>

      </header>
    )
  }
}
