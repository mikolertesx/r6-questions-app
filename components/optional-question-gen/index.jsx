import { useState, useEffect } from 'react'
import ButtonControls from 'components/button-controls'
import styles from './styles.module.scss'

const OptionalQuestionGen = ({ setData, questionData }) => {
  const [optionsTotal, setOptionsTotal] = useState(0)
  const [optionsTexts, setOptionsTexts] = useState({})

  let optionsArray = optionsTotal > 0 ? new Array(optionsTotal).fill('*') : []

  useEffect(() => {
    const currentTotalOptions = Object.keys(optionsTexts).length
    if (currentTotalOptions > optionsTotal) {
      for (let i = optionsTotal; i < currentTotalOptions; i++) {
        const newOptionsObj = {
          ...optionsTexts,
        }
        delete newOptionsObj[`option-${i}`]
        setOptionsTexts(newOptionsObj)
      }
    }
  }, [optionsTotal, optionsTexts])

  useEffect(() => {
    setData({
      ...questionData,
      options: {
        ...optionsTexts,
      },
    })
  }, [optionsTexts])

  return (
    <div className={styles['question-gen-container']}>
      <label className={styles.label}>Add your question</label>
      <input
        type="text"
        className={styles.input}
        onChange={(e) =>
          setData({ ...questionData, questionText: e.target.value })
        }
      />
      <div className={styles['options-container']}>
        <label className={styles.label} htmlFor="">
          Add the options that you need
        </label>
        {optionsArray.map((option, index) => (
          <input
            className={styles.input}
            key={`option-input-${index}`}
            type="text"
            value={optionsTexts[`option-${index}`] || ''}
            onChange={(e) => {
              setOptionsTexts({
                ...optionsTexts,
                [`option-${index}`]: e.target.value,
              })
            }}
          />
        ))}
        <div>
          <ButtonControls
            addFn={() => setOptionsTotal(optionsTotal + 1)}
            subtractFn={() => {
              if (optionsTotal > 0) {
                setOptionsTotal(optionsTotal - 1)
              }
            }}
            addText="Add option"
            subtractText="Remove option"
          />
        </div>
      </div>
    </div>
  )
}

export default OptionalQuestionGen
