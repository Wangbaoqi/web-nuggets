import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
 
  Link
} from 'react-router-dom'

import './index.scss'
export default class TimeNav extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props)

    this.state = {
      showTimetype: false
    }
  }




  handleShowTimetype() {
    this.setState({
      showTimetype: !this.state.showTimetype
    })
  }

  render() {
    const { showTimetype = false } = this.state 

    const dropIcon = classNames({
      'fa fa-sort-desc': true,
      'icon-drop': showTimetype
    })

    return (
      <header className='list-header'>
        <nav className='list-nav'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link to='/timeline?sort=popular'>热门</Link>
            </li>
            <li className='nav-item'>
              <Link to='/timeline?sort=newest'>最新</Link>
            </li>
            <li className='nav-item'>
              <Link to='/timeline?sort=three_days_hottest'>热榜</Link>
            </li>
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
