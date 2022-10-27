import React, { useState } from 'react'
import styles from "../css/Modal.module.css"
import { useProjectsContext } from '../context/ProjectsContext'
import { HiDocumentAdd } from "react-icons/hi"
import { FaWindowClose} from "react-icons/fa"

function Modal({open, close}) {
    const { name, setName } = useProjectsContext();
    const {  createProject, getProjects} = useProjectsContext();
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
      <label className={styles.userLabel}>Project</label>
      </div>
      
      
       <button className={styles.addButton}
       disabled={name === ""}
        onClick={ async () => {
         await createProject();
          setName("")
          close()
          await getProjects()
        }}
      >
        <HiDocumentAdd />
      </button>
      <button className={styles.closeButton} onClick={close}><FaWindowClose /></button>
      
      
      
     
        

        </div>
    </div>
  )
}

export default Modal