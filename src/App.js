import logo from './logo.svg';
import './App.css';


import { useEffect, useState } from 'react';


// routes
import { Routes, Route, HashRouter as Router } from 'react-router-dom';

// components 
import HomePage from './pages/Home/home';
import ProjectIndivComp from './pages/ProjectIndiv/ProjectIndiv';
import ExpIndivComp from './pages/ExpIndiv/ExpIndiv';
import LoadingScreen from './components/LoadingScreen/Loading';
import Test from './pages/test/Test';
import TestPage from './pages/test/TestPage'; // Import the new TestPage component

function App() {
  

  return (
    <div className="App">
      <Router >
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project-indiv/:project-id" element={<ProjectIndivComp/>} />
            <Route path="/exp-indiv/:exp-id" element={<ExpIndivComp />} />
            <Route path="/test" element={<TestPage />} /> {/* Add the new route for TestPage */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
