import React, { useState } from "react";
import questions from "./data";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestion] = useState(data);

  return (
    <main>
      <section className="container">
        <article>
          <h3>questions and answers about login</h3>
        </article>
        <section>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
