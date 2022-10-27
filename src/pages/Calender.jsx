import React, {useState, useEffect} from 'react'
import { useProjectsContext } from '../context/ProjectsContext';
import moment from "moment";
import axios from "axios";
import styles from "../css/Calender.module.css"
import {IoMdDoneAll} from "react-icons/io"

function Calender() {

  const { tasks, timeLogs, getTimeLogs, getTasks } = useProjectsContext();
  const [selectedDate, setSelectedDate] = useState("")

  const uniqueTaskDate = [...timeLogs.reduce((map, obj) => map.set(moment(obj.start).format("MMM do YY"), obj), new Map()).values()];
  const filteredTimeLogs = timeLogs.filter((timeLog) => moment(selectedDate).isSame(timeLog.start, "day")  )
  
  
  function deleteTimeLog(id){
    axios.delete(`http://localhost:3000/timelogs/${id}`)
    .then(() => {
      getTimeLogs();
    })
  }



useEffect(() => {
  getTimeLogs();
}, []);


useEffect(() => {
  getTasks();
}, []);

  return (
    <div className={styles.calenderContainer}>

<div className={styles.select}>
<select  
diasbled={tasks === null}
onChange={(e) => setSelectedDate(e.target.value)}>
        <option selected disabled>Dates</option>
            {uniqueTaskDate.map((timeLog) => (
              <option key={timeLog.id} value={timeLog.start}>{moment(timeLog.start).format("MMM Do YY")}
              </option>
            ))}
          </select>
          </div>
          <ul>
      {filteredTimeLogs.map((filteredTimeLog) => {
      const task = tasks.find((task) => task.id === filteredTimeLog.taskId )
      console.log(task)
        return (
        <li className={styles.text} key={filteredTimeLog.id}>
        {task.name} : <span className={styles.time}>{filteredTimeLog.end} </span> <a className={styles.doneButton} onClick={() => deleteTimeLog(filteredTimeLog.id)}><span>&nbsp;&nbsp;&nbsp;&nbsp;<IoMdDoneAll  /></span></a> 
         
        
           
        </li>
      )})}
      </ul>

    </div>
  )
}

export default Calender