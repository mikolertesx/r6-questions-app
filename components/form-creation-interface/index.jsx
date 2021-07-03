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

  useEffect(() => {
    console.log(formData)
  }, [formData])

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
          <button
            onClick={() => updateForm({ formId, formData })}
            style={{ marginLeft: '16px' }}
          >
            Save form
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
