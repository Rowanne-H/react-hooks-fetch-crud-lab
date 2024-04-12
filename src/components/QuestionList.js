import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( {questions, handleDeleteQuestion, handleUpdateQuestion} ) {
  
  if (questions === []) return <h3>Loading...</h3>
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        /* display QuestionItem components here after fetching */
        questions.map(question => {return < QuestionItem key={question.id} question={question} onDeleteQuestion={handleDeleteQuestion} onUpdateQuestion={handleUpdateQuestion}/>})
        }</ul>
    </section>
  );
}

export default QuestionList;
