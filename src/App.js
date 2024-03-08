import logo from './logo.svg';
import './App.css';


import { useEffect, useState } from 'react';


// routes
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

// components 
import HomePage from './pages/Home/home';
import ProjectIndivComp from './pages/ProjectIndiv/ProjectIndiv';
import ExpIndivComp from './pages/ExpIndiv/ExpIndiv';
import LoadingScreen from './components/LoadingScreen/Loading';
import Test from './pages/test/Test';


function App() {
  

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project-indiv/:project-id" element={<ProjectIndivComp/>} />
            <Route path="/exp-indiv/:exp-id" element={<ExpIndivComp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
