import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
  



  changeTheme() {
    const { onChange } = this.props

    if(onChange) {
      onChange('blue')
    }
  }

  render() {
    console.log(this.props, 'header props');
    const { themeColor = '' } = this.props
    return (
      <div className='header-container'>
        <span style={{ color: themeColor}}>this is a header</span>

        <button onClick={this.changeTheme.bind(this)}>change</button>
      </div>
    )
  }
}
