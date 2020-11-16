import { createStore,combineReducers,applyMiddleware} from 'redux'
import  thunk  from  'redux-thunk';
import {rootReducers} from '../reducers'

export const store = createStore(rootReducers,applyMiddleware(thunk))