import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import CourseRecommendPage from './pages/courseRecommend.jsx';
import ResearchPaperAnalyserPage from './pages/researchPaperAnalyser.jsx';
import CodingEnvironmentPage from './pages/codingEnvironment.jsx';


const App = () => {
  return (
    <Router>
      <div className="app">
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/course-recommend" element={<CourseRecommendPage />} />
            <Route path="/research-paper-analyser" element={<ResearchPaperAnalyserPage />} />
            <Route path="/coding-environment" element={<CodingEnvironmentPage />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
};

export default App;