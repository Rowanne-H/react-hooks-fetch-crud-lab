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
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => setQuestions(questions.filter(question => question.id !== id)));
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion}/> : <QuestionList questions={questions} handleDeleteQuestion={handleDeletedQuestion}/>}
    </main>
  );
}

export default App;
