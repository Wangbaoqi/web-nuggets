import React, { Component } from 'react'

import { 
  HeaderLabel, 
  TimelineNav, 
  TimelineList, 
  Advertise,
  AuthorList,
  InterestBook,
  CopyRight
} from '../../components/index'

import NetWork from '../../utils/netWork'

import './index.scss'

export default class TimeLine extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('componentDidMount');
    
    this._fetchArticleList()

    this._fetchArticleCategory()

    this._fetchAuthorList()

    this._fetchInterestBook()

    
  }

  _fetchArticleCategory() {
    // 
    NetWork('http://127.0.0.1:7001/api/categories', {
      params: {}
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err, 'error');
    })
    
  }

  _fetchArticleList() {
    // fetch article list
    NetWork('http://127.0.0.1:7001/api/timelineList', {
      method: 'POST',
      data: {

      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err, 'error');
    })
  }

  _fetchAuthorList() {
    // fetch article list  
    NetWork('http://127.0.0.1:7001/api/authorList', {
      method: 'POST',
      data: {

      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err, 'error');
    })
  }

  _fetchInterestBook() {
    NetWork('http://127.0.0.1:7001/api/bookrecList', {
      data: {

      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err, 'error');
    })
  }

  render() {
    console.log(this.props)
    const { location, history, match, staticContext} = this.props
    return (
      <div className='main-timeline'>
        <HeaderLabel/>
        
        <div className='timeline-container'>
          <div className='timeline-entry-left'>
            <TimelineNav />
            <TimelineList />
            {/* this is timeline left {location.pathname} */}
          </div>
          <aside className='timeline-aside'>
            <Advertise />
            <AuthorList />
            <InterestBook />
            <CopyRight />
          </aside>
        </div>
      </div>
    )
  }
}
