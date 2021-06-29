import { useEffect, useState } from 'react'

const questionTypes = [
  {
    id: 'question-type-1',
    type: 'open question',
    value: 'open-question',
  },
  {
    id: 'question-type-2',
    type: 'optional question',
    value: 'optional-question',
  },
  {
    id: 'question-type-3',
    type: 'multiple answers checkbox',
    value: 'checkbox-question',
  },
  {
    id: 'question-type-4',
    type: 'range question',
    value: 'range-question',
  },
]

const OpenQuestionGen = ({ setData, questionType }) => {
  return (
    <>
      <label htmlFor="">Add your question</label>
      <textarea
        onChange={(e) =>
          setData({ type: questionType, questionText: e.target.value })
        }
      />
    </>
  )
}

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

const RangeQuestionGen = ({ setData, questionType }) => {
  return (
    <>
      <label htmlFor="">
        Add the last value for the range (the starting value is always 0)
      </label>
      <input
        type="number"
        onChange={(e) => {
          if (e.target.value > 0) {
            setData({ type: questionType, rangeLimit: e.target.value })
          }
        }}
      />
    </>
  )
}

function QuestionGenerator() {
  const [questionData, setQuestionData] = useState({
    type: 'open-question',
  })

  useEffect(() => {
    console.log(questionData)
  }, [questionData])

  return (
    <div className="question-generator">
      <h1>Add new questions</h1>
      <select
        onChange={(e) => {
          setQuestionData({ type: e.target.value })
        }}
      >
        {questionTypes.map((questionType) => (
          <option value={questionType.value} key={questionType.id}>
            {questionType.type}
          </option>
        ))}
      </select>
      <div className="question-input-container">
        {questionData.type === questionTypes[0].value && (
          <OpenQuestionGen
            setData={setQuestionData}
            questionType={questionData.type}
          />
        )}
        {questionData.type === questionTypes[1].value && (
          <OptionalQuestionGen
            setData={setQuestionData}
            questionType={questionData.type}
          />
        )}
        {questionData.type === questionTypes[2].value && (
          <CheckboxQuestionGen
            setData={setQuestionData}
            questionType={questionData.type}
          />
        )}
        {questionData.type === questionTypes[3].value && (
          <RangeQuestionGen
            setData={setQuestionData}
            questionType={questionData.type}
          />
        )}
      </div>
    </div>
  )
}

export default QuestionGenerator
