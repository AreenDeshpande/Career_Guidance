import React from 'react';
import './codingEnvironment.css';

const CodingEnvironmentPage = () => {
  return (
    <div className="coding-environment-page">
      <h2 className="page-title">Coding Environment</h2>
      <p className="page-description">Write, run, and test your code in an interactive coding environment.</p>
      <textarea className="code-editor" placeholder="Write your code here..."></textarea>
      <button className="run-code-button">Run Code</button>
    </div>
  );
};

export default CodingEnvironmentPage;