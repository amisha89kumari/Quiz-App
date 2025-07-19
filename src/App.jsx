
import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'Which language is used for styling web pages?',
    options: ['HTML', 'JQuery', 'CSS', 'XML'],
    answer: 'CSS'
  },
  {
    question: 'Which is not a JavaScript Framework?',
    options: ['React', 'Angular', 'Vue', 'Cassandra'],
    answer: 'Cassandra'
  },
  {
    question: 'Which is used for Connect To Database?',
    options: ['PHP', 'HTML', 'JS', 'All'],
    answer: 'PHP'
  },
  {
    question: 'React is a __?',
    options: ['Framework', 'Library', 'Database', 'Language'],
    answer: 'Library'
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }

  return (
    <div className="app-wrapper">
      <div className="app">
        <h1>React Quiz App</h1>
        {showScore ? (
          <div className="score-section">
            <h2>Your Score: {score} / {questions.length}</h2>
            <button onClick={restartQuiz}>Restart Quiz</button>
          </div>
        ) : (
          <div className="question-section">
            <h2>Q{currentQuestion + 1}: {questions[currentQuestion].question}</h2>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)}>{option}</button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
