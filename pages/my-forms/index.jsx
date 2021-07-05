import { connect } from 'react-redux'
import { addForm } from 'store/formsReducer'
import FormPreview from 'components/form-preview'
import styles from './styles.module.scss'
import Navbar from 'components/landing-navbar'
import { useRouter } from 'next/router'

const MyFormsPage = ({ user, forms, addForm }) => {

  const router = new useRouter()

  const addNewForm = () => {
    addForm()
  }
  if (!user.username) {
      router.push('/')
      return null
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
        {Object.keys(forms).length > 0 &&
          Object.keys(forms).map((formId, index) => {
            const { formTitle } = forms[formId]
            const title = formTitle !== '' ? formTitle : `Form ${index + 1}`
            return <FormPreview key={formId} formId={formId} title={title} />
          })}
        <button onClick={addNewForm}>
          <strong>Add a Form +</strong>
        </button>
      </div>
    </>
   
  )
}

const MapStateToProps = ({ forms, user }) => ({
  forms,
  user
})

const MapDispatchToProps = (dispatch) => ({
  addForm: (formId) => dispatch(addForm(formId)),
})

export default connect(MapStateToProps, MapDispatchToProps)(MyFormsPage)
