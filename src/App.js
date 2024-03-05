import logo from './logo.svg';
import './App.css';


import { useEffect, useState } from 'react';


// routes
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

// components 
import HomePage from './pages/Home/home';
import LoadingScreen from './components/LoadingScreen/Loading';


function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
