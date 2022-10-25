import {createContext, useContext, useState, useEffect} from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
    const [name, setName] = useState("")
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [timeLogs, setTimeLogs] = useState([]);
   

    const getProjects = async () => {
        const { data } = await axios.get("http://localhost:3000/projects");
        setProjects(data);
        
      };

      const getTasks = async () => {
        const { data } = await axios.get("http://localhost:3000/tasks");
        setTasks(data);
        
      };

      const getTimeLogs = async () => {
        const {data} = await axios.get("http://localhost:3000/timelogs");
        setTimeLogs(data)
      }

      const createProject = () => {
        axios.post("http://localhost:3000/projects", {
            name: name,
            id: uuidv4(),
        });
      };

      

    

    const providerValue = {
        projects,
        setProjects,
        name,
        setName,
        getProjects,
        createProject,
        tasks,
        getTasks,
        timeLogs,
        getTimeLogs
       
    }

    return (
        <ProjectsContext.Provider value={providerValue}>
            {children}
        </ProjectsContext.Provider>
    )
}

export function useProjectsContext() {
    const context = useContext(ProjectsContext);
    
    if (!context) {
        throw new Error("rip");
      }
    
      return context;
}