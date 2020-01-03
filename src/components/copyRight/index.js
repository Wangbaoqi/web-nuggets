import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

import './index.scss'

import { copyRight } from "../../utils/enumConfig";


export default class CopyRight extends Component {
  static propTypes = {

  }

  render() {
    

    const copyRightList = copyRight.map((item, idx) => (
      <li className='right-item' key={`copy-${idx}`}>
        <Link to={item.path} >{item.title}</Link>
      </li>
    ))


    return (
      <ul className='copy-right'>
        {copyRightList}
      </ul>
    )
  }
}
