import React, { useState } from 'react'
import { useProjectsContext } from '../context/ProjectsContext'
import axios from "axios";


function AddProject() {
    const { name, setName } = useProjectsContext();
    const { projects, setProjects, createProject, getProjects} = useProjectsContext();
    

  return (
    <div>
        <input 
        placeholder="Project"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
       <button
        onClick={() => {
          createProject();
          setName("")
          window.location.reload()
        }}
      >
        Lägg till
      </button>
    </div>
  )
}

export default AddProject