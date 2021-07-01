import { useEffect, useState } from 'react'
import QuestionGenerator from 'components/question-generator'
import QuestionCard from 'components/question-card'

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
      <div>
        {
         formData.questions.length && formData.questions.map((question,index)=>{
          return <QuestionCard key={index} question={question}/>
         }) 
        }
        <QuestionGenerator setFormData={setFormData} formData={formData} />

      </div>
    </div>
  )
}

export default FormCreationInterface
