import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import QuestionCard from 'components/question-card'
import { GiConsoleController } from 'react-icons/gi'
import styles from './styles.module.scss'

const mockup = {
  formName: 'Mockup form',
  questions: [
    {
      text: 'Que piensas del estado actual de enroute?',
      type: 'OPEN',
    },
    {
      text: 'Que corte de carne prefieres?',
      type: 'MULTIPLE',
      options: {
        option0: 'Rib Eye',
        option1: 'T-Bone',
        option2: 'New York',
      },
    },
    {
      text: 'Selecciona tus actividades favoritas',
      type: 'CHECKBOX',
      options: {
        option0: 'Musica',
        option1: 'Natacion',
        option2: 'Fotografia',
        option3: 'Baile',
        option4: 'Videojuegos',
      },
    },
    {
      text: 'Cuantos años tienes?',
      type: 'RANGE',
      rangeLimit: '99',
    },
  ],
}

const ClientFormInterface = ({ isPreview, forms }) => {
  const [questions, setQuestions] = useState([])
  const [formTitle, setFormTitle] = useState('')
  const router = useRouter()
  const { formId } = router.query

  useEffect(() => {
    if (isPreview && forms[formId]) {
      const { questions, formTitle } = forms[formId]
      setQuestions(questions)
      setFormTitle(formTitle)
    }
  }, [formId, isPreview, forms])

  useEffect(() => {
    console.log(questions)
  }, [questions])

  return (
    <div className={styles.clientForm}>
      {isPreview ? (
        <h1>{`This is a preview for ${formTitle}`}</h1>
      ) : (
        <h1>{formTitle}</h1>
      )}
      <div>
        {questions.map((questionToRender, index) => {
          return (
            <QuestionCard
              key={`form-question-${index}`}
              question={questionToRender}
            />
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = ({ forms }) => ({
  forms,
})

export default connect(mapStateToProps)(ClientFormInterface)
