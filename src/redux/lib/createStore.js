

import isPlainObject from '../util/isPlainObject'

/**
 * createStore
 * @param {*} reducer 
 * @returns {Store}
 */
export default function createStore(reducer) {

  if(typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function')
  }

  let currentState = {}
  let currentListeners = []

  const getState = () => currentState


  const subscribe = (listener) => {

    if(typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function')
    }

    currentListeners.push(listener)
  }

  const dispatch = (action) => {

    if(!isPlainObject(action)) {
      throw new Error('Expected the action to be a object')
    }

    if(action.type === 'undefined') {
      throw new Error(' the type of action must has value')
    }

    try {
      // update the state
      currentState = reducer(currentState, action)
    } catch(err) {
      console.log(err, 'update the state error');
    }

    for(let i = 0; i < currentListeners.length; i++) {
      let listener = currentListeners[i]
      listener()
    }

    return action
    
  }

  dispatch({})


  return {
    getState,
    subscribe,
    dispatch
  }
}