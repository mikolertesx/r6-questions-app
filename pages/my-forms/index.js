import { useState } from 'react'
import ButtonControls from 'components/button-controls'
import { FormPreview } from 'components/form-preview'
import styles from './styles.module.scss'

const MyFormsPage = () => {
  const [currentForms, setCurrentForms] = useState([])
  const addNewForm = () => {
    const newArray = [...currentForms]
    newArray.push({})
    setCurrentForms(newArray)
  }
  const removeForm = () => {
    if (currentForms.length > 0) {
      const newArray = [...currentForms]
      newArray.pop()
      setCurrentForms(newArray)
    }
  }

  return (
    <div className={styles.container}>
      {currentForms.length > 0 &&
        currentForms.map((form, index) => (
          <FormPreview key={`form-${index}`} />
        ))}
      <ButtonControls
        addFn={addNewForm}
        subtractFn={removeForm}
        addText="Add Form"
        subtractText="Remove Form"
      />
    </div>
  )
}

export default MyFormsPage
