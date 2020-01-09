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
    timeLineList: PropTypes.array
  }

  render() {

    const {timeLineList = []} = this.props
    


    const timeLineLists = timeLineList.map((item, idx) => (
      <div className='list-item' key={item.node.id}>
        <Link to={item.node.originalUrl}>
          <div className='item-content'>
            <div className='info-content'>
              <div className='info-meta'>
                <ul className='meta-list'>
                  { item.node.hot ? <li className='meta-item-recommend'>荐</li> : '' }
                  <li className='meta-item-post'>专栏</li>
                  <li className='meta-item meta-item-user'>
                    <span >{item.node.user.username}</span>
                  </li>
                  <li className='meta-item meta-item-day'>3天前</li>
                  <li className='meta-item meta-item-tag'>
                    {
                      item.node.tags.map((e, idx) => (
                        <span key={`tag-${idx}`}>{idx > 0 ? '/' : ''} {e.title} </span>
                      ))
                    }
                  </li>
                </ul>
              </div>
              <div className='info-title'>
                <span className='title-big'>{item.node.title}</span>
              </div>
              <div className='info-action'>
                <ul className='action-list'>
                  <li className='action action-item'>
                    <i className='fa fa-thumbs-up'></i>
                    <span className='item-text'>{item.node.likeCount}</span>
                  </li>
                  <li className='action action-item'>
                    <i className='fa fa-comment'></i>
                    <span className='item-text'>{item.node.commentsCount}</span>
                  </li>
                  <li className='action action-item'>
                    <i className='fa fa-share-square-o'></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className='info-thumb'>
              <img src={item.node.screenshot} />
            </div>
          </div>
        </Link>
      </div>
    ))


    return (
      <section className='timeline-list-container'>
        {timeLineLists}
      </section>
    )
  }
}
