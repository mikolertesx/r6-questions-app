import Link from 'next/Link'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import styles from './styles.module.scss'

export const FormPreview = ({ currentForms, setCurrentForms, index }) => {
  const handleDelete = () => {
    const newArray = [...currentForms]
    newArray.splice(index, 1)
    setCurrentForms(newArray)
  }

  return (
    <div className={styles.container}>
      <Link href={`/my-forms/${index}`}>
        <h1 className={styles['form-title']}>{`Form ${index + 1}`}</h1>
      </Link>
      <div className={styles.controls}>
        <RiDeleteBin5Fill
          className={styles['delete-btn']}
          onClick={handleDelete}
        />
      </div>
    </div>
  )
}
