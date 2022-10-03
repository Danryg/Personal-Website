import { createContext, useEffect, useState } from "react";
import { fetchProjects } from "../services/firebase/firebaseHelper";
import { SuccessResponseWithValue } from "../services/firebase/ServiceResponses";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { firestore } from "../config/FirebaseConfig";
import { ProjectFromDatabase, ProjectToDatabase } from "../utils/GlobalTypes";
const ProjectsContext = createContext(undefined);

export function ProjectsContextProvider({ children }) {
  const [projects, setProjects] = useState<ProjectFromDatabase[] | undefined>(
    undefined
  );

  useEffect(() => {
    getProjects();
  }, []);

  const updateProject = async (project: ProjectFromDatabase) => {
    const docRef = doc(firestore, "projects", project.id);
    const res = await updateDoc(docRef, project).then((result) => {
      console.log("Document successfully updated!: ", result);
    });
    getProjects();
  };

  const createProject = async (project: ProjectFromDatabase) => {
    const inProj = {
      title: project.title,
      description: project.description,
      pictures: project.pictures,
      contributors: project.contributors,
      date: project.date,
      gitLink: project.gitLink,
      pinned: project.pinned,
      pictureUrl: project.pictureUrl,
    };
    console.log("inProj", inProj);
    await addDoc(collection(firestore, "projects"), inProj).then((result) => {
      console.log("Document successfully created!: ", result);
    });
  };
  const getProjects = async () => {
    const querySnapshot = await getDocs(collection(firestore, "projects"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      if (!projects)
        setProjects([{ id: doc.id, ...doc.data() } as ProjectFromDatabase]);
      else
        setProjects([
          ...projects,
          { id: doc.id, ...doc.data() } as ProjectFromDatabase,
        ]);
    });
  };

  const values = {
    projects,
    updateProject,
    createProject,
  };

  return (
    <ProjectsContext.Provider value={values}>
      {children}
    </ProjectsContext.Provider>
  );
}

export default ProjectsContext;
