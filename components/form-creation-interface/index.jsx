import { useEffect, useState } from 'react'
import QuestionGenerator from 'components/question-generator'

const FormCreationInterface = () => {
  const [formData, setFormData] = useState({
    formName: '',
    questions: [],
  })

  useEffect(() => {
    console.log(formData)
  }, [formData])

  return (
    <div className="interface-container">
      <label htmlFor=""></label>
      <input
        type="text"
        onChange={(e) =>
          setFormData({
            ...formData,
            formName: e.target.value,
          })
        }
      />
      <QuestionGenerator setFormData={setFormData} formData={formData} />
    </div>
  )
}

export default FormCreationInterface
