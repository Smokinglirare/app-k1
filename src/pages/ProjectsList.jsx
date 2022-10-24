import React, { useEffect, useState } from 'react'
import { useProjectsContext } from '../context/ProjectsContext'
import axios from 'axios';
import Modal from '../components/Modal';
import TopNav from '../components/TopNav';

function ProjectsList() {

    const { projects, getProjects} = useProjectsContext();
    const [openModal, setOpenModal] = useState(false);

    function deleteProject(id){
      axios.delete(`http://localhost:3000/projects/${id}`)
      .then(() => {
        getProjects();
      })
    }

    useEffect(() => {
      getProjects();
    }, []);

   console.log(projects)

  return (
    <div>
   <TopNav />
   <ul>
      {projects.map((project) => (
        <li key={project.id}>
           {project.name}  <button onClick={() => deleteProject(project.id)}>delete</button> 
           <button>Finish</button>
           
           
        </li>
      ))}
      </ul>
      <button onClick={() => setOpenModal(!openModal)}>Add Project</button>
      <Modal open={openModal} close={() => setOpenModal(!openModal)} />
    </div>
  )
}

export default ProjectsList