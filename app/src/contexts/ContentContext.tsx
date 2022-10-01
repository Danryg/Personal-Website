import { createContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
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
}

const ContentContext = createContext<ContentContextProps>({
  homeContent: undefined,
});

export function ContentContextProvider({ children }) {
  const [homeContent, setHomeContent] = useState(undefined);

  const firstload = async () => {
    const docRef = doc(firestore, "content", "home");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setHomeContent(docSnap.data());
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  useEffect(() => {
    firstload();
  }, []);

  const values: ContentContextProps = {
    homeContent,
  };

  return (
    <ContentContext.Provider value={values}>{children}</ContentContext.Provider>
  );
}
export default ContentContext;
