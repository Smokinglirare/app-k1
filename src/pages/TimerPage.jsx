import React, {useState, useEffect} from 'react'
import moment from "moment";
import { useProjectsContext } from '../context/ProjectsContext';
import styles from "../css/TimerPage.module.css"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import {FaPlay, FaStop} from "react-icons/fa"

function TimerPage() {
    const { tasks, getTasks } = useProjectsContext();
    const [selectedTask, setSelectedTask] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const [diff, setDiff] = useState("00:00:00");
    const [timer, setTimer] = useState();

    const timerFunction = () => {
      
          const timer = setInterval(() => {
            let start = moment(startDate);
            let end = moment(new Date());
            let diff = end.diff(start);
            let f = moment.utc(diff).format("HH:mm:ss.SSS");
            setDiff(f);
            
          }, );
          setTimer(timer);
    }

    useEffect(() => {
      setInterval(() => {
      setStartDate(new Date());
    }, 1000)
    }, [timerFunction])

    const createTimer = () => {
        axios.post("http://localhost:3000/timelogs", {
            id: uuidv4(),
            taskId: selectedTask,
            start: startDate,
            end: diff, 
        });
      };

    /*  function startTimer () {
        if (selectedTask === "") {
          timerFunction() === null
        }
      } */

      useEffect(() => {
        getTasks();
      }, []);
     
  return (
    <div className={styles.timerPageContainer}>
      <div className={styles.select}>
        <select  onChange={(e) => setSelectedTask(e.target.value)}>
        <option selected disabled>Tasks</option>
            {tasks.map((task) => (
              <option key={task.id} value={task.id}>{task.name}</option>
            ))}
            
          </select>
          </div>
          <div className={styles.bottomSide}>
          <h1>{diff}</h1>
    <button 
    disabled={selectedTask === "" || selectedTask === "Tasks"}
    onClick={() => {timerFunction()}}
    
    >
        <FaPlay />
      </button>
      <a onClick={() => {
        createTimer();
        clearInterval(timer)
        setDiff("00:00:00")
        setStartDate(new Date());
        }}><FaStop /></a>
        
     </div>
    </div>
  )
}

export default TimerPage