import React, { useState } from 'react'
import styles from "../css/Modal.module.css"
import { useProjectsContext } from '../context/ProjectsContext'
import { HiDocumentAdd } from "react-icons/hi"
import { FaWindowClose} from "react-icons/fa"

function Modal2({open, close}) {
    const { name, setName } = useProjectsContext();
    const {  createTask,} = useProjectsContext();
    if(!open) return null;
   
  return (
    <div className={styles.overlay}>
        <div className={styles.modalContainer}>
        <div className={styles.inputGroup}>
        <input 
        type="text"
        required=""
        name="text"
        className={styles.input}
        placeholder=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className={styles.userLabel}>Task</label>
      </div>
      
      
       <button className={styles.addButton}
        onClick={() => {
          createTask();
          setName("")
          window.location.reload()
        }}
      >
        <HiDocumentAdd />
      </button>
      <button className={styles.closeButton} onClick={close}><FaWindowClose /></button>
      
      
      
     
        

        </div>
    </div>
  )
}

export default Modal2