import React from 'react'
import styles from "../css/TopNav.module.css"
import { Link } from "react-router-dom";
import ProjectsList from '../pages/ProjectsList';
import TasksList from '../pages/TasksList';

function TopNav() {
  return (
    <div className={styles.topNavContainer}>
        <div className={styles.projects}>
            <Link className={styles.topNavButton} to="/" element={<ProjectsList />}>Projects</Link>
        </div>

        <div className={styles.tasks}>

        <Link className={styles.topNavButton} to="/tasksList" element={<TasksList />}>Tasks</Link>
        </div>

    </div>
  )
}

export default TopNav