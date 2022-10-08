import { createContext, useContext, useEffect, useState } from "react";
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
import StorageContext from "./StorageContexte";

const ServiceContext = createContext(undefined);

export const ServiceContextProvider = ({ children }) => {
  const { uploadFile, getImage } = useContext(StorageContext);
  const [languages, setLanguages] = useState<
    languageFromDatabase[] | undefined
  >(undefined);
  const [frameWorks, setFrameWorks] = useState<
    frameWorkFromDatabase[] | undefined
  >(undefined);

  useEffect(() => {
    getLanguages();
  }, []);

  const getLanguages = async () => {
    const querySnapshot = await getDocs(collection(firestore, "languages"));
    const tempProjects: languageFromDatabase[] = [];
    querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots
      const imageUrl = await getImage(`images/languages/${doc.id}`);
      const project: languageFromDatabase = {
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        pictureUrl: imageUrl,
      };
      tempProjects.push(project);
    });
    console.log("Ser: ", tempProjects);
    setLanguages(tempProjects);
  };

  const createLanguage = async (
    inLang: languageToDatabase,
    file: File,
    url?: string | undefined
  ) => {
    const id = await addDoc(collection(firestore, "languages"), inLang).then(
      (result) => {
        console.log("Document successfully created!: ", result);
        uploadFile(file, `images/languages/${result.id}`);

        return result.id;
      }
    );
    setLanguages([...languages, { ...inLang, id, pictureUrl: url ? url : "" }]);
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
      setLanguages(languages.filter((l) => l.id !== lang.id));
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

export default ServiceContext;
