
import React, { useState } from 'react';

interface QuizProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (isCorrect: boolean) => void;
}

const Quiz: React.FC<QuizProps> = ({ question, options, correctAnswer, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;

    setSelectedAnswer(option);
    setIsAnswered(true);
    onAnswer(option === correctAnswer);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{question}</h5>
        <ul className="list-group">
          {options.map((option, index) => (
            <li
              key={index}
              className={`list-group-item list-group-item-action ${isAnswered ? (option === correctAnswer ? 'list-group-item-success' : (option === selectedAnswer ? 'list-group-item-danger' : '')) : ''}`}
              onClick={() => handleOptionClick(option)}
              style={{ cursor: 'pointer' }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
