import { useState, useEffect } from 'react'

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
  }, [optionsTotal])

  useEffect(() => {
    setData({
      ...questionData,
      options: {
        ...optionsTexts,
      },
    })
  }, [optionsTexts])

  return (
    <>
      <label>Add your question</label>
      <input
        type="text"
        onChange={(e) =>
          setData({ ...questionData, questionText: e.target.value })
        }
      />
      <label htmlFor="">Add the options that you need</label>
      {optionsArray.map((option, index) => (
        <input
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
      <button onClick={() => setOptionsTotal(optionsTotal + 1)}>
        Add option
      </button>
      <button
        onClick={() => {
          if (optionsTotal > 0) {
            setOptionsTotal(optionsTotal - 1)
          }
        }}
      >
        Remove option
      </button>
    </>
  )
}

export default OptionalQuestionGen
