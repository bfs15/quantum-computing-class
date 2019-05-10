import React from 'react'
import Question from './Question'

const Questions = ({ questions, toggleFilter }) => {
   const questionList = questions.map(question => {
      return (
         <Question question={question} toggleFilter={toggleFilter} key={question.id}>
         </Question>
      )
   })
   
   return (
      <div className="questions_component">
         {questionList}
      </div>
   )
}

export default Questions;