import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import LazyLoad from 'vanilla-lazyload'


import './index.scss'

if(!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad('.img-lazy')
}

export default class TimelineList extends Component {
  static propTypes = {
    timeLineList: PropTypes.array
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    document.lazyLoadInstance.update();

  }

  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  render() {

    const {timeLineList = []} = this.props
    


    const timeLineLists = timeLineList.map((item, idx) => (
      <div className='list-item' key={item.node.id}>
        <Fragment>
          <div className='item-content'>
            <div className='info-content'>
              <div className='info-meta'>
                <ul className='meta-list'>
                  { item.node.hot ? <li className='meta-item-recommend'>荐</li> : '' }
                  <li className='meta-item-post'>专栏</li>
                  <li className='meta-item meta-item-user'>
                    <Link to=''>{item.node.user.username}</Link>
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
                <Link className='title-big' to=''>{item.node.title}</Link>
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
              {
                item.node.screenshot ? <img className='lazy img-lazy' data-src={item.node.screenshot}/> : ''
              }
              
            </div>
          </div>
        </Fragment>
      </div>
    ))


    return (
      <section className='timeline-list-container'>
        {timeLineLists}
      </section>
    )
  }
}
