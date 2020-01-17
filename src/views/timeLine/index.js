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
    this.state = {
      timeLineList: [],
      authorList: [],
      interestBook: []
    }
  }

  componentDidMount() {

    const { } = this.props
    console.log('componentDidMount');
    
    this._fetchArticleList()

    this._fetchArticleCategory()

    this._fetchAuthorList()

    this._fetchInterestBook()

    
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    // this._fetchArticleList()

  }

  componentWillReceiveProps() {
    this._fetchArticleList()
    
    console.log('componentWillReceiveProps');
    
  }

  _fetchArticleCategory() {
    // 
    NetWork('http://127.0.0.1:7001/api/categories', {
      params: {}
    }).then(res => {
      // console.log(res)
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
      const { data = {} } = res;
      const { articleFeed:{ items = {} } } = data;
      this.setState({
        timeLineList: items.edges,

      })
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
      const { data: { recommendationCard = {}}} = res
      const { items = []} = recommendationCard;
      this.setState({
        authorList: items
      })
    }).catch(err => {
      console.log(err, 'error');
    })
  }

  _fetchInterestBook() {
    NetWork('http://127.0.0.1:7001/api/bookrecList', {
      data: {

      }
    }).then(res => {
      const { s = '', m = '', d = {}} = res;
      const { data = []} = d
      this.setState({
        interestBook: data
      })
      // console.log(res)
    }).catch(err => {
      console.log(err, 'error');
    })
  }

  render() {
    // console.log(this.props, 'jjjjj')
    const { timeLineList = [], authorList = [], interestBook = [] } = this.state
    const { location, history, match, staticContext} = this.props
    return (
      <div className='main-timeline'>
        <HeaderLabel {...this.props}/>
        
        <div className='timeline-container'>
          <div className='timeline-entry-left'>
            <TimelineNav {...this.props}/>
            <TimelineList {...this.props} timeLineList={timeLineList}/>
            {/* this is timeline left {location.pathname} */}
          </div>
          <aside className='timeline-aside'>
            <Advertise />
            <AuthorList authorList={authorList}/>
            <InterestBook interestBook={interestBook}/>
            <CopyRight />
          </aside>
        </div>
      </div>
    )
  }
}
