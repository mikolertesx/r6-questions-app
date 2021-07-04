import { useEffect, useState } from 'react'
import style from './styles.module.scss'

const QuestionCard = (props) => {
  const [question, setQuestion] = useState(props.question)

  if (question.type === 'OPEN') {
    return (
      <div className={style.question}>
        <h2>{`${question.questionText}`}</h2>
        <input placeholder="Enter your answer here"></input>
      </div>
    )
  }

  if (question.type === 'MULTIPLE') {
    return (
      <div className={style.question}>
        <h2>{`${question.questionText}`}</h2>
        <label> Pick an option</label>
        <form>
          {Object.values(question.options).map((option, index) => {
            return (
              <>
                <input
                  className={style.option}
                  key={index}
                  name={question.questionText}
                  type="radio"
                />
                <label key={`l-${index}`}>{option}</label>
              </>
            )
          })}
        </form>
      </div>
    )
  }

  if (question.type === 'CHECKBOX') {
    return (
      <div className={style.question}>
        <h2>{`${question.questionText}`}</h2>
        <label> Pick one or more options</label>
        <div>
          {Object.values(question.options).map((option, index) => {
            return (
              <>
                <input className={style.option} key={index} type="checkbox" />
                <label key={`l-${index}`}>{option}</label>
              </>
            )
          })}
        </div>
      </div>
    )
  }

  if (question.type === 'RANGE') {
    return (
      <div className={style.question}>
        <h2>{`${question.questionText}`}</h2>
        <input type="number" min="0" max={question.rangeLimit} />
      </div>
    )
  }
}

export default QuestionCard
