import { FORM_TYPES } from './types'

export const addForm = (formId) => ({
  type: FORM_TYPES.ADD_FORM,
  payload: formId,
})

export const removeForm = (formId) => ({
  type: FORM_TYPES.REMOVE_FORM,
  payload: formId,
})
