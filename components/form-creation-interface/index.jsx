import { useEffect, useState } from 'react'
import QuestionGenerator from 'components/question-generator'
import FormTitleInput from 'components/form-title-input'

const FormCreationInterface = () => {
  const [formData, setFormData] = useState({
    formName: '',
    questions: [1],
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
          setFormData={setFormData}
          formData={formData}
        />
      ))}
    </div>
  )
}

export default FormCreationInterface
