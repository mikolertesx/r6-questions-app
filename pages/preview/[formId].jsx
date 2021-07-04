import React from 'react'
import { useRouter } from 'next/router'
import ClientFormInterface from 'components/clientFormInterface'

const UserFormView = () => {
  const router = useRouter()
  const { formId } = router.query

  return (
    <div>
      <ClientFormInterface isPreview />
    </div>
  )
}

export default UserFormView
