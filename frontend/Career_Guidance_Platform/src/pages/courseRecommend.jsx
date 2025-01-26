
import React from 'react';
import './courseRecommend.css';

const CourseRecommendPage = () => {
  return (
    <div className="course-recommend-page">
      <h2 className="page-title">Course Recommendations</h2>
      <p className="page-description">Discover courses tailored to your interests and goals!</p>
      <div className="course-list">
        <div className="course-item">Course 1: Introduction to AI</div>
        <div className="course-item">Course 2: Advanced Python Programming</div>
        <div className="course-item">Course 3: Data Science Essentials</div>
      </div>
    </div>
  );
};

export default CourseRecommendPage;