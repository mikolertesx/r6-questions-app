import { FORM_TYPES } from './types'

const initialState = {}

export const formsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_TYPES.ADD_FORM:
      return {
        ...state,
        [action.payload]: {
          formTitle: '',
          questions: [],
        },
      }
  }
}
