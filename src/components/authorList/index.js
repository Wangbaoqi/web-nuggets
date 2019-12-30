import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import './index.scss'
export default class AuthorList extends Component {
  static propTypes = {

  }

  render() {

    const authorList = [0,1,2].map((item, idx) => (
      <li className='author-item' key={`ahthor-${idx}`}>
        <Link to=''>
          <div className='item'>
            <img className='item-logo' src="https://user-gold-cdn.xitu.io/2018/11/8/166f3e51b01fc132?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" alt="" />
            <div className='item-info'>
              <Link to='/user/111'>Nate.wang <span className='level'>Lv3</span></Link>
              <div className='info-item'>前端工程师 @腾讯</div>
              <div className='info-item'>JavaScript、前端、CSS、HTML和node </div>
            </div>
          </div>
        </Link>
      </li>
    ))
    return (
      <div className='author-list'>
        <header className='author-title'>
          🎖️作者榜
        </header>
        <ul className='list-author'>
          {authorList}
        </ul>
        <div className='all-author'>
          完整榜单
          <i className='fa fa-chevron-right'></i>
        </div>
      </div>
    )
  }
}
