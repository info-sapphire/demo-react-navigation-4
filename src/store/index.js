import reduxThunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import { postReducer } from './reducers/post'

const rootReduser = combineReducers({ post: postReducer })

export default createStore(rootReduser, applyMiddleware(reduxThunk))
