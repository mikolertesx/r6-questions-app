import React from 'react';
import { useRouter } from 'next/router'

const mockup = {
    formName: "Mockup form",
    questions: [

    ]
}

const UserFormView = () => {

    const router = useRouter()
    const { formId } = router.query

    return (
        <div>
            <h1>{`This is the form ${formId}`}</h1>
        </div>
    );
}

export default UserFormView;
