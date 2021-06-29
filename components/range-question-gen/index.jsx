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

export default RangeQuestionGen
