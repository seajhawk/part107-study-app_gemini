
import React from 'react';
import { Link } from 'react-router-dom';
import topics from '../data/topics.json';

const Study = () => {
  return (
    <div className="container mt-4">
      <h1>Study Modules</h1>
      <div className="list-group">
        {topics.map(topic => (
          <Link key={topic.id} to={`/study/${topic.id}`} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{topic.title}</h5>
            </div>
            <p className="mb-1">{topic.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Study;
