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
    authorList: PropTypes.array
  }

  render() {
    const { authorList = []} = this.props
    console.log(this.props, 'authorList');

    const newAuthorList = authorList.slice(0,3)
    const authorLists = newAuthorList.map(item => (
      <li className='author-item' key={item.id}>
        <Link to={item.author.id} className='author'>
          <div className='item'>
            <img className='item-logo' src="https://user-gold-cdn.xitu.io/2018/11/8/166f3e51b01fc132?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" alt="" />
            <div className='item-info'>
              <p className='info-title'>{item.author.username} <span className='level'>Lv{item.author.level}</span></p>
              <div className='info-item'>{item.author.jobTitle} { item.author.company ? `@${item.author.company}` : '' }</div>
              <div className='info-item'>{item.description} </div>
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
          {authorLists}
        </ul>
        <div className='all-author'>
          完整榜单
          <i className='fa fa-chevron-right'></i>
        </div>
      </div>
    )
  }
}
