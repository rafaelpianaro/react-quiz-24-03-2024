import { useState } from "react"
import { answerT } from "./types/question";
import Layout from "./layout";
import Quiz from "./components/Quiz";

function App() {
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<answerT[]>([]);

  const onDone = () => {
    setDone(true)
  }

  return (
    <Layout>
      {done ? "done" : <Quiz setAnswers={setAnswers} setScore={setScore} setCurrentQuestion={setCurrentQuestion} done={onDone} currentQuestion={currentQuestion} answers={answers} />}
    </Layout>
  )
}

export default App
