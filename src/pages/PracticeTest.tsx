
import React, { useState } from 'react';
import Quiz from '../components/Quiz';
import questions from '../data/questions.json';

const PracticeTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizFinished(false);
  };

  if (isQuizFinished) {
    return (
      <div className="container mt-4 text-center">
        <h1>Quiz Finished!</h1>
        <p className="lead">Your score: {score} out of {questions.length}</p>
        <button className="btn btn-primary" onClick={handleRestartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Practice Test</h1>
      <Quiz
        question={currentQuestion.question}
        options={currentQuestion.options}
        correctAnswer={currentQuestion.correctAnswer}
        onAnswer={handleAnswer}
      />
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handleNextQuestion}>Next Question</button>
      </div>
    </div>
  );
};

export default PracticeTest;
