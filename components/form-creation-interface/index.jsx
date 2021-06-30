import { useState } from 'react'
import QuestionGenerator from 'components/question-generator'

const FormCreationInterface = () => {
  const [formData, setFormData] = useState({
    formName: '',
  })

  return (
    <div className="interface-container">
      <label htmlFor=""></label>
      <input type="text" onChange />
      <QuestionGenerator setFormData={setFormData} />
    </div>
  )
}
