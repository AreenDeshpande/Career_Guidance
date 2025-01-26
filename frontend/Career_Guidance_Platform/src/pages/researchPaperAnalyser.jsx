import React from 'react';
import './researchPaperAnalyser.css';

const ResearchPaperAnalyserPage = () => {
  return (
    <div className="research-paper-analyser-page">
      <h2 className="page-title">Research Paper Analyser</h2>
      <p className="page-description">Upload and analyze research papers for insights and summaries.</p>
      <form className="upload-form">
        <input type="file" className="file-input" />
        <button type="submit" className="upload-button">Analyze Paper</button>
      </form>
    </div>
  );
};

export default ResearchPaperAnalyserPage;