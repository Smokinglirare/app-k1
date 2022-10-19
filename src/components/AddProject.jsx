import React, { useState } from 'react'
import { useProjectsContext } from '../context/ProjectsContext'

let nextId = 1;

function AddProject() {
    const [text, setText] = useState("");
    const {setProjects} = useProjectsContext();

  return (
    <div>
        <input 
        placeholder="Project"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
       <button
        onClick={() => {
          setProjects({
            text: text,
            id: nextId++,
          });
          setText("");
        }}
      >
        Lägg till
      </button>
    </div>
  )
}

export default AddProject