
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Study from './pages/Study';
import Module from './pages/Module';
import Flashcards from './pages/Flashcards';
import PracticeTest from './pages/PracticeTest';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/study/:moduleId" element={<Module />} />
        <Route path="/study/:moduleId/:subtopicId" element={<Module />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/practice-test" element={<PracticeTest />} />
      </Routes>
    </Router>
  );
}

export default App;

