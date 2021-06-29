import { useState, useEffect } from 'react'

const CheckboxQuestionGen = ({ setData, questionType }) => {
  const [checkboxTotal, setCheckboxTotal] = useState(0)
  const [checkboxTexts, setCheckboxTexts] = useState({})

  let checkboxArray =
    checkboxTotal > 0 ? new Array(checkboxTotal).fill('*') : []

  useEffect(() => {
    const currentTotalCheckbox = Object.keys(checkboxTexts).length
    if (currentTotalCheckbox > checkboxTotal) {
      for (let i = checkboxTotal; i < currentTotalCheckbox; i++) {
        const newCheckboxObj = {
          ...checkboxTexts,
        }
        delete newCheckboxObj[`checkbox-${i}`]
        setCheckboxTexts(newCheckboxObj)
      }
    }
  }, [checkboxTotal])

  useEffect(() => {
    setData({
      type: questionType,
      checkBox: {
        ...checkboxTexts,
      },
    })
  }, [checkboxTexts])

  return (
    <>
      <h2>Add the checkboxes that you need</h2>
      <label htmlFor="">How many checkboxes will you need?</label>
      <input
        type="number"
        onChange={(e) => {
          setCheckboxTotal(parseInt(e.target.value))
        }}
      />
      {checkboxArray.map((checkbox, index) => (
        <input
          key={`option-input-${index}`}
          type="text"
          value={checkboxTexts[`checkbox-${index}`] || ''}
          onChange={(e) => {
            setCheckboxTexts({
              ...checkboxTexts,
              [`checkbox-${index}`]: e.target.value,
            })
          }}
        />
      ))}
    </>
  )
}

export default CheckboxQuestionGen
