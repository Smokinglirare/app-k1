import React from 'react'
import { useProjectsContext } from '../context/ProjectsContext'

function ProjectsList() {

    const { projects } = useProjectsContext();

    function deleteProject() {
        projects.filter(project => project.id !== project.id);
    }

    console.log(projects);
  return (
    <div>
   
   <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <button onClick={deleteProject()}>delete</button> {project.text}
        </li>
      ))}
    </ul>


    </div>
  )
}

export default ProjectsList