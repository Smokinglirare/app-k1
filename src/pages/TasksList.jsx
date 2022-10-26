import React, { useEffect, useState } from 'react'
import { useProjectsContext } from '../context/ProjectsContext'
import axios from 'axios';
import Modal2 from '../components/Modal2';
import TopNav from '../components/TopNav';
import styles from "../css/TaskList.module.css"
import {IoMdDoneAll} from "react-icons/io"

function TasksList() {

    const { tasks, getTasks, createTask} = useProjectsContext();
    const [openModal, setOpenModal] = useState(false);

   

    function deleteTask(id){
      axios.delete(`http://localhost:3000/tasks/${id}`)
      .then(() => {
        getTasks();
      })
    }
 
    useEffect(() => {
      getTasks();
    }, [] );

   

  return (
    <div className={styles.tasksListContainer}>
      <TopNav />
   <ul>
      {tasks.map((task) => (
        <li className={styles.tasksList} key={task.id}>
           {task.name}  <a className={styles.doneButton} onClick={() => deleteTask(task.id)}> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <IoMdDoneAll /></span></a> 
        
           
        </li>
      ))}
      </ul>
      <a className={styles.button1} onClick={() => setOpenModal(!openModal)}>Add Task</a>
      <Modal2 open={openModal} close={() => setOpenModal(!openModal)} />
    </div>
  )
}

export default TasksList