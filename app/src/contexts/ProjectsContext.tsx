import { createContext, useContext, useEffect, useState } from "react";
import { fetchProjects } from "../services/firebase/firebaseHelper";
import { SuccessResponseWithValue } from "../services/firebase/ServiceResponses";
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { firestore } from "../config/FirebaseConfig";
import { ProjectFromDatabase, ProjectToDatabase } from "../utils/GlobalTypes";
import StorageContext from "./StorageContexte";
const ProjectsContext = createContext(undefined);

export function ProjectsContextProvider({ children }) {
  const [projects, setProjects] = useState<ProjectFromDatabase[] | undefined>(
    undefined
  );
  const { getImage } = useContext(StorageContext);

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
    const id = await addDoc(collection(firestore, "projects"), inProj).then(
      (result) => {
        console.log("Document successfully created!: ", result);

        return result.id;
      }
    );

    return id;
  };
  const getProjects = async () => {
    const querySnapshot = await getDocs(collection(firestore, "projects"));
    const tempProjects: ProjectFromDatabase[] = [];
    await querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots
      const imageUrl = await getImage(doc.id);
      const project: ProjectFromDatabase = {
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        pictures: [],
        contributors: [],
        date: doc.data().date,
        gitLink: doc.data().gitLink,
        pinned: false,
        pictureUrl: imageUrl,
      };
      tempProjects.push(project);
    });
    setProjects(tempProjects);
  };

  const deleteProject = async (project: ProjectFromDatabase) => {
    const docRef = doc(firestore, "projects", project.id);
    await deleteDoc(docRef).then((result) => {
      console.log("Document successfully deleted!: ", result);
    });
    getProjects();
  };

  const values = {
    projects,
    updateProject,
    createProject,
    deleteProject,
  };

  return (
    <ProjectsContext.Provider value={values}>
      {children}
    </ProjectsContext.Provider>
  );
}

export default ProjectsContext;
