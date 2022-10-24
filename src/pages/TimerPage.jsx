import React, {useState} from 'react'
import { Timer, Time, TimerOptions } from 'timer-node';
import moment from "moment";

function TimerPage() {
    const [startDate, setStartDate] = useState(new Date());
    const [diff, setDiff] = useState("00:00:00");
    const [timer, setTimer] = useState();
console.log(diff);
  return (
    <div>
    <button
        onClick={() => {
          setStartDate(new Date());
          const timer = setInterval(() => {
            let start = moment(startDate);
            let end = moment(new Date());
            let diff = end.diff(start);
            let f = moment.utc(diff).format("HH:mm:ss.SSS");
            setDiff(f);
          }, 1000);
          setTimer(timer);
        }}
      >
        start
      </button>
      <button onClick={() => clearInterval(timer)}>stop</button>
      <p>{diff}</p>
    </div>
  )
}

export default TimerPage