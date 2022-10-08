import { firebaseStorage } from "../config/FirebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { createContext } from "react";

const StorageContext = createContext(undefined);

export function StorageContextProvider({ children }) {
  const uploadFile = async (file, path) => {
    const storageRef = ref(firebaseStorage, path);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  const getImage = async (path) => {
    const storageRef = ref(firebaseStorage, path);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  const uploadProjectImage = async (file: File, projectId: string) => {
    const storageRef = ref(firebaseStorage, `images/projects/${projectId}`);

    const res = await uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
    console.log("res: ", res);
  };

  const getProjectImage = async (projectId: string) => {
    const storageRef = await ref(
      firebaseStorage,
      `images/projects/${projectId}`
    );
    const url = await getDownloadURL(storageRef).then((url) => {
      console.log("url: ", url);
      return url;
    });
    return url;
  };

  const values = {
    uploadFile,
    uploadProjectImage,
    getProjectImage,
    getImage,
  };

  return (
    <StorageContext.Provider value={values}>{children}</StorageContext.Provider>
  );
}

export default StorageContext;
