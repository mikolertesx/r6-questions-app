import styles from './styles.module.scss'

const RangeQuestionGen = ({ setData, questionData }) => {
  return (
    <div className={styles['question-gen-container']}>
      <label className={styles.label}>Add your question</label>
      <input
        className={styles.input}
        type="text"
        onChange={(e) =>
          setData({ ...questionData, questionText: e.target.value })
        }
      />
      <label className={styles.label} htmlFor="">
        Add the last value for the range (the starting value is always 0)
      </label>
      <input
        className={styles.input}
        type="number"
        onChange={(e) => {
          if (e.target.value > 0) {
            setData({ ...questionData, rangeLimit: e.target.value })
          }
        }}
      />
    </div>
  )
}

export default RangeQuestionGen
