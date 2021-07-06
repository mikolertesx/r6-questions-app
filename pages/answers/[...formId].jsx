import { useEffect, useState, Fragment } from 'react'
import { useRouter } from 'next/router'
import Navbar from 'components/landing-navbar'

import AnswerGroup from 'components/answer-group'

const FormAnswersPage = () => {
  const [answers, setAnswers] = useState([])
  const [currentAnswer, setCurrentAnswer] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { formId } = router.query

  const uniqueForm = formId ? formId[0] : null

  const goNextAnswer = () => {
    setCurrentAnswer((prevCurrAns) => prevCurrAns + 1)
  }

  const goPrevAnswer = () => {
    setCurrentAnswer((prevCurrAns) => prevCurrAns - 1)
  }

  useEffect(() => {
    if (!uniqueForm) return
    const getAnswers = async () => {
      const response = await fetch(`/api/forms/${uniqueForm}/see-answers`)
      const data = await response.json()
      setAnswers(data)
      setLoading(false)
      setCurrentAnswer(0)
    }

    getAnswers()
  }, [uniqueForm, loading])

  // Avoid currentAnswer fro going over the top or the bottom
  useEffect(() => {
    if (currentAnswer === null) return
    if (currentAnswer > answers.length - 1) {
      setCurrentAnswer(0)
    } else if (currentAnswer < 0) {
      setCurrentAnswer(answers.length - 1)
    }
  }, [currentAnswer, answers])

  if (loading) {
    return (
      <>
        <Navbar />
        <p>Loading...</p>
      </>
    )
  }

  return (
    <Fragment>
      <Navbar />
      <div>
        <AnswerGroup answers={answers[currentAnswer]} />
      </div>
      <button onClick={goPrevAnswer}>-</button>
      <button onClick={goNextAnswer}>+</button>
    </Fragment>
  )
}

export default FormAnswersPage
