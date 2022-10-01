import { createContext, useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../config/FirebaseConfig";

export type HomeContentFromDatabase = {
  name: string;
  title: string;
  desc: string;
  occupation: string;
  projects: string;
  services: string;
  work: string;
};

interface ContentContextProps {
  homeContent: HomeContentFromDatabase;
  updateHomeContent: (content: any) => Promise<void>;
}

const ContentContext = createContext<ContentContextProps>({
  homeContent: undefined,
  updateHomeContent: async () => {},
});

export function ContentContextProvider({ children }) {
  const [homeContent, setHomeContent] = useState(undefined);

  const firstload = async () => {
    const docRef = doc(firestore, "content", "home");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setHomeContent(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const updateHomeContent = async (content: any) => {
    const docRef = doc(firestore, "content", "home");

    const res = await updateDoc(docRef, { ...homeContent, ...content }).then(
      (result) => {
        console.log("Document successfully updated!: ", result);
      }
    );

    setHomeContent(content);
  };

  useEffect(() => {
    firstload();
  }, []);

  const values: ContentContextProps = {
    homeContent,
    updateHomeContent,
  };

  return (
    <ContentContext.Provider value={values}>{children}</ContentContext.Provider>
  );
}
export default ContentContext;
