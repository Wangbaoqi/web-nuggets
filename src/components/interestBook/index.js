import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'




import './index.scss'

export default class InterestBook extends Component {
  static propTypes = {

  }


  render() {

    const bookList = [0,1].map((item, idx) => (
      <Link to='/book/12' key={`book-${idx}`}>
        <div className='book-item'>
          <div className='book-img'>
            <img src="https://user-gold-cdn.xitu.io/2019/6/13/16b515f4a633aa47?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1" alt=""/>
          </div>
          <div className='book-info'>
            <p className='info-title'>基于 Swoole 的联机对战游戏实践</p>
            <div className='info-btn'>
              <span className='info-price'>10212已购买</span>
              <span className='btn-read'>试读 <i className='fa fa-caret-right'></i></span>
            </div>
          </div>
        </div>
      </Link>
    ))
    return (
      <div className='interest-book'>
        <header className='interest-title'>
          你可能感兴趣的小册
        </header>
        <div className='book-list'>
          {bookList}
        </div>
      </div>
    )
  }
}
