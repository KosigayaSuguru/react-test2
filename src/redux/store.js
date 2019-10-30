import { createStore } from 'redux'
import { rootReducer } from './reducers'

let store = createStore(rootReducer)

export default store

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
