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

export default OpenQuestionGen
