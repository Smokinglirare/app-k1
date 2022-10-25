import React, {useState, useEffect} from 'react'
import { useProjectsContext } from '../context/ProjectsContext';
import moment from "moment";

function Calender() {

  const { tasks, timeLogs, getTimeLogs } = useProjectsContext();
  const [selectedDate, setSelectedDate] = useState("")


useEffect(() => {
  getTimeLogs();
}, []);

const uniqueTaskDate = [...timeLogs.reduce((map, obj) => map.set(moment(obj.start).format("MMM do YY"), obj), new Map()).values()];

console.log(uniqueTaskDate)

{/*
const timeLogsDate = timeLogs.map((timeLog) => timeLog.taskId);
const filtered = timeLogsDate.filter(({taskId}, index) => !taskId.includes(taskId, index + 1))
console.log(filtered)

const dateSet = new Set(timeLogsDate);

let myDatesArrayLeveled = Array.from(dateSet);

console.log(timeLogs.id)
console.log(myDatesArrayLeveled); */}
  return (
    <div>


<select  onChange={(e) => setSelectedDate(e.target.value)}>
        <option selected disabled>Dates</option>
            {uniqueTaskDate.map((timeLog) => (
              <option key={timeLog.id} value={timeLog.taskId}>{moment(timeLog.start).format("MMM Do YY")}
              </option>
            ))}
          </select>
          
         

    </div>
  )
}

export default Calender