import './App.css';

import ProjectsList from './pages/ProjectsList';
import Navbar from './components/Navbar';

import TasksList from './pages/TasksList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calender from './pages/Calender';
import TimerPage from './pages/TimerPage';
import TimerPage2 from './pages/TimerPage2';

function App() {

  return (

    <Router>
    <div className="App">
    
    <Routes>
<Route path="/" element={<ProjectsList />} />
<Route path="/tasksList" element={<TasksList />} />
<Route path="/calender" element={<Calender />} />
<Route path="/timerPage" element={<TimerPage />} />
<Route path="/timerPage2" element={<TimerPage2 />} />
    </Routes>
    
      <Navbar />
      
    </div>
    
     
    </Router>
    
  );
}

export default App;
