import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './index.scss'

export default class TimelineList extends Component {
  static propTypes = {

  }

  render() {
    return (
      <section className='timeline-list-container'>
        <div className='list-item'>
          <Link to='/post/011'>
            <div className='item-content'>
              <div className='info-content'>
                <div className='info-meta'>
                  <ul className='meta-list'>
                    <li className='meta-item-recommend'>荐</li>
                    <li className='meta-item-post'>专栏</li>
                    <li className='meta-item meta-item-user'>
                      <Link to='/user/111'>nate.wang</Link>
                    </li>
                    <li className='meta-item meta-item-day'>3天前</li>
                    <li className='meta-item meta-item-tag'>
                      <Link to='/tag/javascript'>JS/前端</Link>
                    </li>
                  </ul>
                </div>
                <div className='info-title'>
                  <Link to='/post/011'>巧用 CSS 实现酷炫的充电动画</Link>
                </div>
                <div className='info-action'>
                  <ul className='action-list'>
                    <li className='action action-item'>
                      <i className='fa fa-thumbs-up'></i>
                      <span className='item-text'>2012</span>
                    </li>
                    <li className='action action-item'>
                      <i className='fa fa-comment'></i>
                      <span className='item-text'>1232</span>
                    </li>
                    <li className='action action-item'>
                      <i className='fa fa-share-square-o'></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='info-thumb'>
                <img src='https://user-gold-cdn.xitu.io/2019/12/23/16f327a9af8d5ad8?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1' />
              </div>
            </div>
          </Link>
        </div>
      </section>
    )
  }
}
