import { connect, useDispatch } from 'react-redux'
import { addForm } from 'store/formsReducer'
import { FormPreview } from 'components/form-preview'
import styles from './styles.module.scss'
import Navbar from 'components/landing-navbar'

const MyFormsPage = ({ forms, addForm }) => {
  const addNewForm = () => {
    const index = Math.random()
    addForm(index)
    console.log(forms)
  }
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>My Forms</h1>
        {Object.keys(forms).length > 0 ? (
          <p>You can modify each form if you click on the title.</p>
        ) : (
          <p>
            You can manage your forms from here, click on the plus button to get
            started.
          </p>
        )}
        {Object.values(forms).length > 0 &&
          Object.values(forms).map((form, index) => (
            <FormPreview key={`form-${index}`} index={index} />
          ))}
        <button onClick={addNewForm}>
          <strong>Add a Form +</strong>
        </button>
      </div>
    </>
  )
}

const MapStateToProps = ({ forms }) => ({
  forms,
})

const MapDispatchToProps = (dispatch) => ({
  addForm: (formId) => dispatch(addForm(formId)),
})

export default connect(MapStateToProps, MapDispatchToProps)(MyFormsPage)
