import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { updateForm } from 'store/formsReducer'
import QuestionGenerator from 'components/question-generator'
import FormTitleInput from 'components/form-title-input'
import styles from './styles.module.scss'
import Navbar from 'components/landing-navbar'

const FormCreationInterface = ({ forms, updateForm }) => {
  const {
    query: { formId },
  } = useRouter()
  const [formData, setFormData] = useState({
    ...forms[formId],
  })

  const saveForm = async () => {
    try {
      const body = JSON.stringify({
        id: formId,
        form: formData,
      })
      const response = await fetch('http://localhost:3000/api/forms/update', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body,
      })
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.warn(err)
    }
  }

  useEffect(() => {
    updateForm({ formId, formData })
  }, [formData, formId, updateForm])

  return (
    <>
      <Navbar />
      <div className="interface-container">
        <FormTitleInput setFormData={setFormData} formData={formData} />
        {formData.questions.map((question, index) => (
          <QuestionGenerator
            key={`${formData.formTitle}-question-${index}`}
            index={index}
            setFormData={setFormData}
            formData={formData}
          />
        ))}
        <div className={styles['form-interface-controls']}>
          <button
            onClick={() => {
              let newArray = [...formData.questions]
              newArray.push({
                type: 'OPEN',
                questionText: '',
              })
              setFormData({
                ...formData,
                questions: newArray,
              })
            }}
          >
            <strong>Add a Question +</strong>
          </button>
          <button onClick={saveForm} style={{ marginLeft: '16px' }}>
            <strong>Save form</strong>
          </button>
        </div>
      </div>
    </>
  )
}

const MapStateToProps = ({ forms }) => ({
  forms,
})

const MapDispatchToProps = (dispatch) => ({
  updateForm: (formId) => dispatch(updateForm(formId)),
})

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(FormCreationInterface)
