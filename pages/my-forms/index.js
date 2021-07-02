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
      <h1>My Forms</h1>
      {currentForms.length > 0 ? (
        <p>You can modify each form if you click on the title.</p>
      ) : (
        <p>
          You can manage your forms from here, click on the plus button to get
          started.
        </p>
      )}
      {currentForms.length > 0 &&
        currentForms.map((form, index) => (
          <FormPreview
            key={`form-${index}`}
            index={index}
            currentForms={currentForms}
            setCurrentForms={setCurrentForms}
          />
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
