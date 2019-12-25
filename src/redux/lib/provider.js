
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'


export default class Provider extends Component {


  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }


  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}


Provider.propTypes = {
  store: PropTypes.object,
  children: PropTypes.any
}