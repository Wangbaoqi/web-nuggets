import React, { Component } from 'react'

import { HeaderLabel, TimelineNav, TimelineList } from '../../components/index'


import './index.scss'


export default class TimeLine extends Component {
  static propTypes = {

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
            this is timeline left {location.pathname}
          </div>
          <aside className='timeline-aside'>
            this is timeline aside
          </aside>
        </div>
      </div>
    )
  }
}
