import { combineReducers } from 'redux'
import { counter1, counter2 } from './counter'
import { auth } from './login'

export const rootReducer = combineReducers({ counter1, counter2, auth })
