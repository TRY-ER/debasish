import logo from './logo.svg';
import './App.css';


import { useEffect, useState } from 'react';


// routes
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

// components 
import HomePage from './pages/Home/home';
import ProjectIndivComp from './pages/ProjectIndiv/ProjectIndiv';
import LoadingScreen from './components/LoadingScreen/Loading';
import Test from './pages/test/Test';


function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/test" element={<Test/>} /> */}
            <Route path="/project-indiv" element={<ProjectIndivComp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
