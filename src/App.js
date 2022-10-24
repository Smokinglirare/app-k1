import './App.css';

import ProjectsList from './pages/ProjectsList';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

import { useState } from "react";
import TasksList from './pages/TasksList';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calender from './pages/Calender';
import TimerPage from './pages/TimerPage';

function App() {

  return (

    <Router>
    <div className="App">
    
    <Routes>
<Route path="/" element={<ProjectsList />} />
<Route path="/tasksList" element={<TasksList />} />
<Route path="/calender" element={<Calender />} />
<Route path="/timerPage" element={<TimerPage />} />
    </Routes>
    
      <Navbar />
      
    </div>
    
     
    </Router>
    
  );
}

export default App;
