import React, {useState, useEffect} from 'react'
import { useProjectsContext } from '../context/ProjectsContext';
import moment from "moment";
import axios from "axios";

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

const sameId = Object.is(timeLogs.start, tasks.id);


  return (
    <div>


<select  onChange={(e) => setSelectedDate(e.target.value)}>
        <option selected disabled>Dates</option>
            {uniqueTaskDate.map((timeLog) => (
              <option key={timeLog.id} value={timeLog.start}>{moment(timeLog.start).format("MMM Do YY")}
              </option>
            ))}
          </select>
          
          <ul>
      {filteredTimeLogs.map((filteredTimeLog) => {
      const task =  tasks.find((task) => task.id === filteredTimeLog.taskId )
      console.log(task)
        return (
        <li key={filteredTimeLog.id}>
        {task.name}: {filteredTimeLog.end}  <button onClick={() => deleteTimeLog(filteredTimeLog.id)}>delete</button> 
         
        
           
        </li>
      )})}
      </ul>

    </div>
  )
}

export default Calender