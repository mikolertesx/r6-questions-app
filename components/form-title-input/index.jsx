import styles from './styles.module.scss'

const FormTitleInput = ({ setFormData, formData }) => {
  return (
    <div className={styles['form-title-container']}>
      <label className={styles['form-title-label']} htmlFor="">
        Add a title to your form:
      </label>
      <input
        className={styles['form-title-input']}
        type="text"
        onChange={(e) =>
          setFormData({
            ...formData,
            formName: e.target.value,
          })
        }
      />
    </div>
  )
}

export default FormTitleInput
