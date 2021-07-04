import { formsReducer } from './formsReducer'
import { combineReducers } from 'redux'

export const reducers = combineReducers({
  forms: formsReducer,
})
