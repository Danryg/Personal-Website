import { createContext, useState } from "react";
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { firestore } from "../config/FirebaseConfig";
import {
  frameWorkFromDatabase,
  frameWorkToDatabase,
  languageFromDatabase,
  languageToDatabase,
} from "../utils/GlobalTypes";
const ServiceContext = createContext(undefined);

const ServiceContextProvider = ({ children }) => {
  const [languages, setLanguages] = useState<
    languageFromDatabase[] | undefined
  >(undefined);
  const [frameWorks, setFrameWorks] = useState<
    frameWorkFromDatabase[] | undefined
  >(undefined);

  const getLanguages = async () => {
    const querySnapshot = await getDocs(collection(firestore, "languages"));
    const tempProjects: languageFromDatabase[] = [];
    await querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots

      const project: languageFromDatabase = {
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        pictureUrl: "",
      };
      tempProjects.push(project);
    });
    setLanguages(tempProjects);
  };

  const createLanguage = async (inLang: languageToDatabase) => {
    const id = await addDoc(collection(firestore, "languages"), inLang).then(
      (result) => {
        console.log("Document successfully created!: ", result);

        return result.id;
      }
    );

    return id;
  };
  const editLanguage = (lang: languageFromDatabase) => {
    const docref = doc(firestore, "languages", lang.id);
    updateDoc(docref, lang).then((result) => {
      console.log("Document successfully updated!: ", result);
    });
  };

  const deleteLanguage = (lang: languageFromDatabase) => {
    const docref = doc(firestore, "languages", lang.id);
    deleteDoc(docref).then((result) => {
      console.log("Document successfully deleted!: ", result);
    });
  };

  const getFrameworks = async () => {
    const querySnapshot = await getDocs(collection(firestore, "frameworks"));
    const tempProjects: frameWorkFromDatabase[] = [];
    querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots

      const project: frameWorkFromDatabase = {
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        pictureUrl: "",
      };
      tempProjects.push(project);
    });
    setFrameWorks(tempProjects);
  };

  const createFramework = (inFrame: frameWorkToDatabase) => {
    addDoc(collection(firestore, "frameworks"), inFrame).then((result) => {
      console.log("Document successfully created!: ", result);
    });
  };

  const editFramework = (frame: frameWorkFromDatabase) => {
    const docref = doc(firestore, "frameworks", frame.id);
    updateDoc(docref, frame).then((result) => {
      console.log("Document successfully updated!: ", result);
    });
  };

  const deleteFramework = (frame: frameWorkFromDatabase) => {
    const docref = doc(firestore, "frameworks", frame.id);
    deleteDoc(docref).then((result) => {
      console.log("Document successfully deleted!: ", result);
    });
  };

  const values = {
    getLanguages,
    createLanguage,
    editLanguage,
    deleteLanguage,
    getFrameworks,
    createFramework,
    editFramework,
    deleteFramework,
    languages,
    frameWorks,
  };

  return (
    <ServiceContext.Provider value={values}>{children}</ServiceContext.Provider>
  );
};
