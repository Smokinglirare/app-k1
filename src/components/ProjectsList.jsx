import React, { useEffect, useState } from 'react'
import { useProjectsContext } from '../context/ProjectsContext'
import axios from 'axios';
import Modal2 from './Modal2';

function ProjectsList() {

    const { projects, getProjects, tasks, getTasks} = useProjectsContext();
    const [openModal, setOpenModal] = useState(false);

    function deleteProject(id){
      axios.delete(`http://localhost:3000/projects/${id}`)
      .then(() => {
        getProjects();
      })
    }

    function deleteTask(id){
      axios.delete(`http://localhost:3000/tasks/${id}`)
      .then(() => {
        getTasks();
      })
    }
 
    useEffect(() => {
      getProjects();
      getTasks();
    }, []);

   

  return (
    <div>
   
   <ul>
      {projects.map((project) => (
        <li key={project.id}>
           {project.name}  <button onClick={() => deleteProject(project.id)}>delete</button> 
           <button onClick={() => setOpenModal(!openModal)} >Add task</button> 
           <Modal2 open={openModal} close={() => setOpenModal(!openModal)} />
           <button>Finish</button>
           <ul>
      {tasks.map((task) => (
      <li key={task.id}> {task.name} <button onClick={() => deleteTask(task.id)}>delete</button><button>Finish</button></li>
    ))}
    </ul>
           
        </li>
      ))}
      </ul>
      
    </div>
  )
}

export default ProjectsList