import { useEffect, useState } from 'react'
import QuestionGenerator from 'components/question-generator'
import FormTitleInput from 'components/form-title-input'
import styles from './styles.module.scss'
import Navbar from 'components/landing-navbar'

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
    <>
    <Navbar/>
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
         <button onClick={() =>{
           let newArray = [...formData.questions]
           newArray.push({
             type: 'OPEN'
           })
           setFormData({
            ...formData,
            questions: newArray,
          })
         }}>
          <strong>Add a Question +</strong></button>
      </div>
    </div>
    </>
  )
}

export default FormCreationInterface
