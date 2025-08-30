
import React, { useState } from 'react';
import Flashcard from '../components/Flashcard';
import flashcards from '../data/flashcards.json';

const Flashcards = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
  };

  const currentCard = flashcards[currentCardIndex];

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <h1 className="mb-4">Flashcards</h1>
      <Flashcard term={currentCard.term} definition={currentCard.definition} />
      <div className="mt-4">
        <button className="btn btn-primary me-2" onClick={handlePrev}>Previous</button>
        <button className="btn btn-primary" onClick={handleNext}>Next</button>
      </div>
      <p className="mt-2">Card {currentCardIndex + 1} of {flashcards.length}</p>
    </div>
  );
};

export default Flashcards;
