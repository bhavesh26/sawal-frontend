import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import QuizMaster from './components/QuizMaster';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/quiz-master"
            element={<QuizMaster />}
          />
          <Route
            path="/participant"
            element={<HomePage />}
          />
        </Routes>
      </Router>
    </>

  );
}

export default App;
