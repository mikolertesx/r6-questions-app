import { useState, useEffect } from 'react'

const OptionalQuestionGen = ({ setData, questionType }) => {
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
      type: questionType,
      options: {
        ...optionsTexts,
      },
    })
  }, [optionsTexts])

  return (
    <>
      <h2>Add the options that you need</h2>
      <label htmlFor="">How many options will you enter?</label>
      <input
        type="number"
        onChange={(e) => {
          setOptionsTotal(parseInt(e.target.value))
        }}
      />
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
    </>
  )
}

export default OptionalQuestionGen
