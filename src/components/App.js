import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(questions => setQuestions(questions))
  },[])


  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  function handleDeletedQuestion(id) {
    setQuestions(questions.filter(question => question.id !== id))
  }

  function handleUpdatedQuestion(updatedQuestion) {
    setQuestions(questions.map(question => {
      if(question.id === updatedQuestion.id) {return updatedQuestion}
      else {return question}
    }))
  }



  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion}/> : <QuestionList questions={questions} handleDeleteQuestion={handleDeletedQuestion} handleUpdateQuestion={handleUpdatedQuestion}/>}
    </main>
  );
}

export default App;
