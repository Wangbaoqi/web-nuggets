import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { navLabel } from '../../utils/enumConfig'

import './index.scss'

export default class HeaderLabel extends Component {

  static propTypes = {

  }

  constructor(props) {
    super(props)

    this.state = {
      labelActiveIndex: 0
    }
  }


  handleLabelActive(id) {
    this.setState({
      labelActiveIndex: id
    })
  }


  render() {
    console.log(this.props, 'lableList');
    
    const { labelActiveIndex = 0 } = this.state

    const labelList = (navLabel || []).map((item, idx) => {
      
      const className = classNames({
        'label-item': true,
        'active': idx === labelActiveIndex
      })
      return (
        <li className={className} key={`label${idx}`} onClick={this.handleLabelActive.bind(this, idx)}>
          <Link to={item.path}>{item.title}</Link>
        </li>
    )})

    return (
      <nav className='header-label'>
        <div className='label-main'>
          <ul className='label-list'>
            {labelList}
          </ul>
          <span className='label-manage'>标签管理</span>
        </div>
      </nav>
    )
  }
}
