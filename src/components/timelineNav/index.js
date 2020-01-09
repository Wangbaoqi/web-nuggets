import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
 
  Link
} from 'react-router-dom'

import { navTimeList } from '../../utils/enumConfig'

import './index.scss'
export default class TimeNav extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props)

    this.state = {
      navIndex: 0,
      showTimetype: false
    }
  }




  handleShowTimetype() {
    this.setState({
      showTimetype: !this.state.showTimetype
    })
  }
  handleNavTimeActive(index) {
    this.setState({
      navIndex: index
    })
  }

  render() {
    const { showTimetype = false, navIndex = 0 } = this.state 

    const dropIcon = classNames({
      'fa fa-sort-desc': true,
      'icon-drop': showTimetype
    })

    const navList = navTimeList.map((item, idx) => {

      const className = classNames({
        'nav-item': true,
        'active': idx === navIndex
      })

      return  <li className={className} key={`nav-${idx}`} onClick={this.handleNavTimeActive.bind(this, idx)}>
                <Link to={item.path}>{item.title}</Link>
              </li>
    })

    return (
      <header className='list-header'>
        <nav className='list-nav'>
          <ul className='nav-list'>
            {navList}
          </ul>
          <div className='dorp-down-area'>
            <div className='drop-down'>
              <li className='drop-toggle' onClick={this.handleShowTimetype.bind(this)}>
                3天内
                <i className={dropIcon}></i>

                <ul className='drop-menu' style={{ display: showTimetype ? 'block': 'none' }}>
                  <li className='router-item'>
                    <Link to='/timeline?sort=three_days_hottest'>3天内</Link>
                  </li>
                  <li className='router-item'>
                    <Link to='/timeline?sort=five_days_hottest'>5天内</Link>
                  </li>
                  <li className='router-item'>
                    <Link to='/timeline?sort=seven_days_hottest'>7天内</Link>
                  </li>
                  <li className='router-item'>
                    <Link to='/timeline?sort=monthy_hottest'>7天内</Link>
                  </li>
                  <li className='router-item'>
                    <Link to='/timeline?sort=all_hottest'>全部</Link>
                  </li>
                </ul>
              </li>
              
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
