import React from 'react'
import styles from './styles.module.scss'

const OpenQuestionGen = ({ setData, questionData }) => {
  console.log('pregunta', questionData)
  return (
    <div className={styles['question-gen-container']}>
      <label className={styles.label} htmlFor="">
        Add your question
      </label>
      <input
        className={styles.input}
        type="text"
        onChange={(e) =>
          setData({ ...questionData, questionText: e.target.value })
        }
        value={questionData.questionText}
      />
    </div>
  )
}

export default React.memo(OpenQuestionGen)
