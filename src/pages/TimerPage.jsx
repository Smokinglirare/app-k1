import React, {useState} from 'react'
import { Timer, Time, TimerOptions } from 'timer-node';
import moment from "moment";
import { useProjectsContext } from '../context/ProjectsContext';

import axios from "axios"
import { v4 as uuidv4 } from 'uuid';

function TimerPage() {
    const { tasks } = useProjectsContext();
    const [selectedTask, setSelectedTask] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const [diff, setDiff] = useState("00:00:00");
    const [timer, setTimer] = useState();

    const timerFunction = () => {
      setStartDate(new Date());
          const timer = setInterval(() => {
            let start = moment(startDate);
            let end = moment(new Date());
            let diff = end.diff(start);
            let f = moment.utc(diff).format("HH:mm:ss.SSS");
            setDiff(f);
            
          }, 1000);
          setTimer(timer);
    }

    const createTimer = () => {
        axios.post("http://localhost:3000/timelogs", {
            id: uuidv4(),
            taskId: selectedTask,
            start: startDate,
            end: diff,
            
        });
      };
    
console.log(startDate);
console.log(selectedTask)


  return (
    <div>
        <select  onChange={(e) => setSelectedTask(e.target.value)}>
        <option selected disabled>Tasks</option>
            {tasks.map((task) => (
              <option key={task.id} value={task.id}>{task.name}</option>
            ))}
            
          </select>
          <p>{selectedTask}</p>
    <button
        onClick={() => {timerFunction()}}
      >
        start
      </button>
      <button onClick={() => {
        createTimer();
        clearInterval(timer)}}>stop</button>
      <p>{diff}</p>
    {/*  <button className={styles.addButton}
        onClick={() => {
          createTask();
          setName("")
          setSelectedProject();
          close()
        }}
      >
        <HiDocumentAdd />
      </button> */}
    </div>
  )
}

export default TimerPage