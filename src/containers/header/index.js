import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from '../../redux/lib/connect'
import Header from '../../components/header/index'

import { changeTheme } from '../../reducers/theme/reduce'

class HeaderConnect extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }


  

  render() {

    return <Header {...this.props}/>
  }
}


const mapStateToProps = (state, props) => {
  return {
    ...state.themeReducer,
    ...props
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (color) => {
      dispatch(changeTheme(color))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderConnect)