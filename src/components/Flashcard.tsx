
import React, { useState } from 'react';
import './Flashcard.css';

interface FlashcardProps {
  term: string;
  definition: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ term, definition }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <p>{term}</p>
        </div>
        <div className="flashcard-back">
          <p>{definition}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
