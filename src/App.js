import logo from './logo.svg';
import './App.css';
import AddProject from './components/AddProject';
import ProjectsList from './components/ProjectsList';
import Navbar from './components/Navbar';

function App() {
  return (
   
   
   <div className="App">
      <AddProject />
      <ProjectsList />
      <Navbar />

    </div>
  );
}

export default App;
