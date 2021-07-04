import { useState, useEffect } from 'react';
import QuestionCard from 'components/question-card';
import { GiConsoleController } from 'react-icons/gi';
import styles from './styles.module.scss'

const mockup = {
    formName: "Mockup form",
    questions: [
        {
            questionText: "Que piensas del estado actual de enroute?",
            type: "OPEN"    
        },
        {
            questionText: "Que corte de carne prefieres?",
            type: "MULTIPLE" ,  
            options: {
                option0: "Rib Eye",
                option1: "T-Bone",
                option2: "New York",
            },
        },
        {
            questionText: "Selecciona tus actividades favoritas",
            type: "CHECKBOX" ,  
            options: {
                option0: "Musica",
                option1: "Natacion",
                option2: "Fotografia",
                option3: "Baile",
                option4: "Videojuegos",
            },
        },
        {
            questionText: "Cuantos años tienes?",
            type: "RANGE",
            rangeLimit: "99",
        },
        

    ]
}

const ClientFormInterface = () => {

    const [questions, setQuestions] = useState(mockup.questions);
    return (
        <div className={styles.clientForm}>
           <h1>{`This is the form ${mockup.formName}`}</h1>
            <div>
                {
                    questions.map((questionToRender)=>{
                        return <QuestionCard question={questionToRender}/>
                    })
                }
            </div> 
        </div>
    );
}

export default ClientFormInterface;
