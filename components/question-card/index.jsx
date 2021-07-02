import { useEffect, useState } from 'react'

const QuestionCard = (props) => {

  const [question, setQuestion] = useState(props.question)

  console.log(props.question)


  if (question.type === "OPEN") {
      
      return (
        <div>
          <h1>{`${question.questionText}`}</h1>
          <input placeholder="Enter your answer here"></input>
        </div>
      )
  }

  if (question.type === "MULTIPLE") {
      
    return (
      <div>
        <h1>{`${question.questionText}`}</h1>
        <label> Pick an option</label>
        <form>
            {Object.values(question.options).map((option, index)=>{
               return <>
                <input key={index} name={question.questionText} type="radio"/><label key={`l-${index}`}>{option}</label>
                </>
            })}
        </form>
      </div>
    )
  }

if (question.type === "CHECKBOX") {
      
    return (
      <div>
         <h1>{`${question.questionText}`}</h1>
        <label> Pick one or more options</label>
        <div>
            {Object.values(question.options).map((option, index)=>{
               return <>
                <input key={index} type="checkbox"/><label key={`l-${index}`}>{option}</label>
                </>
            })}
        </div>
      </div>
    )
  }  

if (question.type === "RANGE") {
      
    return (
      <div>
        <h1>{`${question.questionText}`}</h1>
        <input type="number" min="0" max={question.rangeLimit}/>
      </div>
    )
  } 

}

export default QuestionCard
