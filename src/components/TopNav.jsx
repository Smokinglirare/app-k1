import React, {useState, useEffect} from 'react'
import styles from "../css/TopNav.module.css"
import { Link, useLocation } from "react-router-dom";
import ProjectsList from '../pages/ProjectsList';
import TasksList from '../pages/TasksList';

function TopNav() {

  const location = useLocation(); 
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);




  return (
    <div className={styles.topNavContainer}>
        <div className={styles.projects}>
            <Link className={styles.topNavButton + (url === "/" ? " current" : "")} to="/">Projects</Link>
        </div>

        <div className={styles.tasks}>

        <Link className={styles.topNavButton + (url === "/tasksList" ?" current" : "")} to="/tasksList" >Tasks</Link>
        </div>

    </div>
  )
}

export default TopNav