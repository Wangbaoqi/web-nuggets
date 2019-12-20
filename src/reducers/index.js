



import themeReducer from './theme/reduce'
import commentReducer from './comment/reduce'


import { combineReducer } from '../redux/index'


const reducerApp = combineReducer({
  themeReducer,
  commentReducer
})

export default reducerApp
