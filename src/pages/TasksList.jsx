import React, { useEffect, useState } from 'react'
import { useProjectsContext } from '../context/ProjectsContext'
import axios from 'axios';
import Modal2 from '../components/Modal2';
import TopNav from '../components/TopNav';

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
    }, [createTask] );

   

  return (
    <div>
      <TopNav />
   <ul>
      {tasks.map((task) => (
        <li key={task.id}>
           {task.name}  <button onClick={() => deleteTask(task.id)}>delete</button> 
           <button>Finish</button>
        
           
        </li>
      ))}
      </ul>
      <button onClick={() => setOpenModal(!openModal)}>Add Task</button>
      <Modal2 open={openModal} close={() => setOpenModal(!openModal)} />
    </div>
  )
}

export default TasksList