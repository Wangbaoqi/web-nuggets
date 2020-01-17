
import isPlainObject from '../util/isPlainObject'


export default function combileReducer(reducers) {


  try{
    
    if(typeof isPlainObject === 'function' && !isPlainObject(reducers)) {
      throw new Error('CombileReducer the reducers to be a object')
    }
    if(Object.prototype.toString.call(reducers) !== '[object Object]') {
      throw new Error('CombileReducer the reducers to be a object')
    }
  }catch (err) {
    console.log(err, 'CombileReducer');
    
  }
  

  const reducerKeys = Object.keys(reducers)
  const finalReducers = {}


  for(let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i]

    if(typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key]
    }

  }

  const finalReducersKeys = Object.keys(finalReducers)

  // console.log(finalReducersKeys);

  return (state = {}, action) => {

    const nextState = {}
    let hasChange = false

    for(let i = 0; i < finalReducersKeys.length; i++) {
      const key = finalReducersKeys[i]
      const reducer = finalReducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)

      if(typeof nextStateForKey === 'undefined') {
        throw new Error('nextStateForKey is error')
      }

      // console.log(nextStateForKey, 'nextStateForKey');
      // console.log(key, 'key');

      nextState[key] = nextStateForKey
      hasChange = hasChange || nextStateForKey !== previousStateForKey
    }
    // console.log(hasChange, 'hasChange');
    // console.log(nextState, 'nextState');
    
    return hasChange ? nextState : state
  }
}