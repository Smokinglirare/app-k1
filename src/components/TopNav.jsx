import React from 'react'
import styles from "../css/TopNav.module.css"
import { Link } from "react-router-dom";
import ProjectsList from '../pages/ProjectsList';
import TasksList from '../pages/TasksList';

function TopNav() {
  return (
    <div className={styles.topNavContainer}>
        <div className={styles.projects}>
            <button><Link to="/" element={<ProjectsList />}>Projects</Link></button>
        </div>

        <div className={styles.tasks}>

        <button> <Link to="/tasksList" element={<TasksList />}>Tasks</Link></button>
        </div>

    </div>
  )
}

export default TopNav