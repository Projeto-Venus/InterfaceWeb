import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Formtest from './components/Formtest';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/formtest' element={<Formtest/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
