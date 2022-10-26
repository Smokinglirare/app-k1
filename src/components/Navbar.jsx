import React from 'react'
import {BiTime} from "react-icons/bi"
import { SlCalender, SlHome } from "react-icons/sl"
import { Link } from 'react-router-dom'
import styles from "../css/Navbar.module.css"
import Calender from '../pages/Calender'
import ProjectsList from '../pages/ProjectsList'
import TimerPage from '../pages/TimerPage'

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
<a><Link to="/calender" element={<Calender />}><SlCalender /></Link></a>
<a><Link to="/" element={<ProjectsList />}><SlHome /></Link></a>
<a><Link to="/timerPage" element={<TimerPage />}><BiTime /></Link></a>

    </div>
  )
}

export default Navbar