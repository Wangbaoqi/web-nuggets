

import React, { Component } from 'react'
import PropTypes from 'prop-types'





export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {


  class Connect extends Component {

    static contextTypes = {
      store: PropTypes.object
    }

    constructor(props) {
      super(props)

      this.state = {
        allProps: {}
      }
    }
    
    componentDidMount() {
      const {store} = this.context

      this._updateProps();

      store.subscribe(() => this._updateProps())
      
    }
    
    _updateProps() {
      const {store} = this.context
      const stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {}
      const dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {}
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
        }
      })
    }


    render() {

      return <WrappedComponent {...this.state.allProps} />
    }
  }

  return Connect
} 
