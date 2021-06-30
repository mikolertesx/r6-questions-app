const OpenQuestionGen = ({ setData, questionData }) => {
  return (
    <>
      <label htmlFor="">Add your question</label>
      <textarea
        onChange={(e) =>
          setData({ ...questionData, questionText: e.target.value })
        }
      />
    </>
  )
}

export default OpenQuestionGen
