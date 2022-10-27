import React, { useState, useEffect } from 'react'
import styles from "../css/Modal.module.css"
import { useProjectsContext } from '../context/ProjectsContext'
import { HiDocumentAdd } from "react-icons/hi"
import { FaWindowClose} from "react-icons/fa"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';

function Modal2({open, close}) {
    
    const [selectedProject, setSelectedProject] = useState("")
    const {   projects, name, setName, getTasks} = useProjectsContext();
    if(!open) return null;

  const createTask = async () => {
   await axios.post("http://localhost:3000/tasks", {
        name: name,
        projectId: selectedProject,
        id: uuidv4(),
    });
  };


  return (
    <div className={styles.overlay}>
        
        <div className={styles.modalContainer}>
          
        <div className={styles.inputGroup}>
          
        
        <input 
        type="text"
        required=""
        name="text"
        className={styles.input}
        placeholder=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className={styles.userLabel}>Task</label>
      </div>
      
      
       <button className={styles.addButton}
       disabled={name === "" || selectedProject === "" || selectedProject === "Projects"}
        onClick={ async () => {
         await createTask();
          setName("")
          setSelectedProject();
          close()
          getTasks();
        }}
      >
        <HiDocumentAdd />
      </button>
      <button className={styles.closeButton} onClick={close}><FaWindowClose /></button>
      
      
      
     
        

        </div>
        <div className={styles.select}>
        <select  onChange={(e) => setSelectedProject(e.target.value)}>
        <option selected disabled>Projects</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>{project.name}</option>
            ))}
          </select>
          </div>
    </div>
  )
}

export default Modal2