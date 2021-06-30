const RangeQuestionGen = ({ setData, questionData }) => {
  return (
    <>
      <label>Add your question</label>
      <input
        type="text"
        onChange={(e) =>
          setData({ ...questionData, questionText: e.target.value })
        }
      />
      <label htmlFor="">
        Add the last value for the range (the starting value is always 0)
      </label>
      <input
        type="number"
        onChange={(e) => {
          if (e.target.value > 0) {
            setData({ ...questionData, rangeLimit: e.target.value })
          }
        }}
      />
    </>
  )
}

export default RangeQuestionGen
