import './App.css';
import AddProject from './components/AddProject';
import ProjectsList from './components/ProjectsList';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

import { useState } from "react";

function App() {

  const [openModal, setOpenModal] = useState(false);

  return (
   
   
   <div className="App">
      <ProjectsList />
      <button onClick={() => setOpenModal(!openModal)}>Add Project</button>
      <Modal open={openModal} close={() => setOpenModal(!openModal)} />
      <Navbar />

    </div>
  );
}

export default App;
