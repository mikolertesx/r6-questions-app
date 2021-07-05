import { FORM_TYPES } from './types'

export const addForm = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/api/forms/create')
  const data = await response.json()
  const formId = data._id
  dispatch({
    type: FORM_TYPES.ADD_FORM,
    payload: formId,
  })
}

export const removeForm = (formId) => ({
  type: FORM_TYPES.REMOVE_FORM,
  payload: formId,
})

export const updateForm = (formData) => ({
  type: FORM_TYPES.UPDATE_FORM,
  payload: formData,
})

export const cleanForms = () => ({
  type: FORM_TYPES.CLEAN_FORMS,
})
