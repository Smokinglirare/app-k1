import React, {useState, useEffect} from 'react'
import {BiTime} from "react-icons/bi"
import { SlCalender, SlHome } from "react-icons/sl"
import { Link, useLocation } from 'react-router-dom'
import styles from "../css/Navbar.module.css"
import Calender from '../pages/Calender'
import ProjectsList from '../pages/ProjectsList'
import TimerPage from '../pages/TimerPage'
import "../css/Navbar.css"



function Navbar() {

  const location = useLocation(); 
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);



  return (
    <div className={styles.navbarContainer}>
<Link className={"link" + (url === "/calender" ? " current" : "")} to="calender" ><SlCalender /></Link>
<Link className={"link" + (url === "/" || url === "/tasksList" ?" current" : "")} to="/" ><SlHome /></Link>
<Link className={"link" + (url === "/timerPage" ? " current" : "")} to="/timerPage" ><BiTime /></Link>

    </div>
  )
}

export default Navbar