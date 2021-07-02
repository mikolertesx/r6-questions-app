import { useEffect, useState } from 'react'
import QuestionGenerator from 'components/question-generator'
import QuestionCard from 'components/question-card'
import FormTitleInput from 'components/form-title-input'
import ButtonControls from 'components/button-controls'
import styles from './styles.module.scss'

const FormCreationInterface = () => {
  const [formData, setFormData] = useState({
    formName: '',
    questions: [
      {
        type: 'OPEN',
      },
    ],
  })
  const [questionsTotal, setQuestionsTotal] = useState(1)

  let questionsArray =
    questionsTotal > 1 ? new Array(questionsTotal).fill('*') : ['*']

  useEffect(() => {
    console.log(formData)
  }, [formData])

  return (
    <div className="interface-container">
      <FormTitleInput setFormData={setFormData} formData={formData} />
      {questionsArray.map((question, index) => (
        <QuestionGenerator
          key={`${formData.formName}-question-${index}`}
          index={index}
          setFormData={setFormData}
          formData={formData}
        />
      ))}
      <div className={styles['form-interface-controls']}>
        <ButtonControls
          addFn={() => setQuestionsTotal(questionsTotal + 1)}
          subtractFn={() => {
            if (questionsTotal > 0) {
              setQuestionsTotal(questionsTotal - 1)
            }
          }}
          addText="Add question"
          subtractText="Remove question"
        />
      </div>
    </div>
  )
}

export default FormCreationInterface
