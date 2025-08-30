
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import curriculum from '../data/curriculum.json';

const Module = () => {
  const { moduleId, subtopicId } = useParams<{ moduleId: string; subtopicId: string }>();
  const [content, setContent] = useState('');

  const topic = curriculum.find(t => t.id === moduleId);
  const subtopic = topic?.subtopics.find(st => st.id === (subtopicId || topic.subtopics[0].id));

  useEffect(() => {
    if (subtopic) {
      import(`../data/modules/${subtopic.contentFile}`)
        .then(res => {
          fetch(res.default)
            .then(response => response.text())
            .then(text => setContent(text))
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }
  }, [subtopic]);

  if (!topic) {
    return <div>Topic not found!</div>;
  }

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-3">
          <h4>{topic.title}</h4>
          <div className="list-group">
            {topic.subtopics.map(st => (
              <Link
                key={st.id}
                to={`/study/${topic.id}/${st.id}`}
                className={`list-group-item list-group-item-action ${subtopic?.id === st.id ? 'active' : ''}`}>
                {st.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-md-9">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Module;
