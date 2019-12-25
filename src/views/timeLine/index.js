import React, { Component } from 'react'

import { HeaderLabel } from '../../components/index'


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
        this is a TimeLine page {location.pathname}
      </div>
    )
  }
}
