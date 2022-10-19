import {createContext, useContext, useState} from "react";

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
    const [projects, setProjects] = useState(null);

    const providerValue = {
        projects,
        setProjects
    }

    return (
        <ProjectsContext.Provider value ={providerValue}>
            {children}
        </ProjectsContext.Provider>
    )
}

export function useProjectsContext() {
    const context = useContext(ProjectsContext)
    
    if (!context) {
        throw new Error("rip");
      }
    
      return context;
}