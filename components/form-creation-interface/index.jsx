import { useEffect, useState } from 'react'
import QuestionGenerator from 'components/question-generator'
import FormTitleInput from 'components/form-title-input'
import ButtonControls from 'components/button-controls'
import styles from './styles.module.scss'

const FormCreationInterface = () => {
  const [formData, setFormData] = useState({
    formName: '',
    questions: [
      {
        type: 'OPEN',
        questionText: '',
      },
    ],
  })

  useEffect(() => {
    console.log(formData)
  }, [formData])

  return (
    <div className="interface-container">
      <FormTitleInput setFormData={setFormData} formData={formData} />
      {formData.questions.map((question, index) => (
        <QuestionGenerator
          key={`${formData.formName}-question-${index}`}
          index={index}
          setFormData={setFormData}
          formData={formData}
        />
      ))}
      <div className={styles['form-interface-controls']}>
        <ButtonControls
          addFn={() => {
            const newQuestions = [...formData.questions]
            newQuestions.push({
              type: 'OPEN',
              questionText: '',
            })
            setFormData({
              ...formData,
              questions: newQuestions,
            })
          }}
          subtractFn={() => {}}
          addText="Add question"
          subtractText="Remove question"
        />
      </div>
    </div>
  )
}

export default FormCreationInterface
