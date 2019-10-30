import { combineReducers } from 'redux'
import { counter1, counter2 } from './counter'

export const rootReducer = combineReducers({ counter1, counter2 })
