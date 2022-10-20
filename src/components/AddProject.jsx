import React, { useState } from 'react'
import { ProjectsContext, useProjectsContext } from '../context/ProjectsContext'

let nextId = 1;

function AddProject() {
    const [text, setText] = useState("");
    const { projects, setProjects} = useProjectsContext();

  return (
    <div>
        <input 
        placeholder="Project"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
       <button
        onClick={() => {
          setProjects(
            [ ...projects,
            {
            text: text,
            id: nextId++,
          }
        ]
          );
          setText("");
        }}
      >
        Lägg till
      </button>
    </div>
  )
}

export default AddProject