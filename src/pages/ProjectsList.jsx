import React, { useEffect, useState } from 'react'
import { useProjectsContext } from '../context/ProjectsContext'
import axios from 'axios';
import Modal from '../components/Modal';
import TopNav from '../components/TopNav';
import styles from "../css/ProjectsList.module.css"
import {IoMdDoneAll} from "react-icons/io"

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

   

  return (
    <div className={styles.projectsListContainer}>
   <TopNav />
   <ul>
      {projects.map((project) => (
        <li className={styles.projectsList} key={project.id}>
           {project.name}  <button className={styles.doneButton} onClick={() => deleteProject(project.id)}> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <IoMdDoneAll /></span></button> 
           
           
           
        </li>
      ))}
      </ul>
      <a className={styles.button1} onClick={() => setOpenModal(!openModal)}>Add Project</a>
      <Modal open={openModal} close={() => setOpenModal(!openModal)} />
    </div>
  )
}

export default ProjectsList