import { createContext, useEffect, useState } from "react";
import { fetchProjects } from "../services/firebase/firebaseHelper";
import { SuccessResponseWithValue } from "../services/firebase/ServiceResponses";

const ProjectsContext = createContext(undefined);

export function ProjectsContextProvider({ children }) {
  const [projects, setProjects] = useState(undefined);

useEffect(() => {
    
} , [projects]);

  const getProjects = async () => {
    if (projects === undefined) {
      const response: SuccessResponseWithValue = await fetchProjects();

      if (response.success) {
        setProjects(response.value);
        return projects;
      }
    }

    return projects;
  };

  const values = {
    projects,
    getProjects,
  };

  return (
    <ProjectsContext.Provider value={values}>
      {children}
    </ProjectsContext.Provider>
  );
}

export default ProjectsContext;