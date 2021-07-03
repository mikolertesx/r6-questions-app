import { reducers } from './rootReducer'
import { createStore } from 'redux'

export const store = createStore(reducers)
