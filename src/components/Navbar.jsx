import React from 'react'
import {BiTime} from "react-icons/bi"
import { SlCalender, SlHome } from "react-icons/sl"
import styles from "../css/Navbar.module.css"

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
<button><SlCalender /></button>
<button><SlHome /></button>
<button><BiTime /></button>

    </div>
  )
}

export default Navbar