import { FORM_TYPES } from './types'

export const addForm = (formId) => ({
  type: FORM_TYPES.ADD_FORM,
  payload: formId,
})
