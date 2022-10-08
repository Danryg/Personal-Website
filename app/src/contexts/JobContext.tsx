import { createContext, useContext, useEffect, useState } from "react";
import { JobFromDatabase, JobToDatabase } from "../utils/GlobalTypes";
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import StorageContext from "./StorageContexte";
import { firestore } from "../config/FirebaseConfig";

const JobContext = createContext(undefined);

export function JobContextProvider({ children }) {
  const { uploadFile, getImage } = useContext(StorageContext);
  const [jobs, setJobs] = useState<JobFromDatabase[]>([]);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    const querySnapshot = await getDocs(collection(firestore, "jobs"));
    const tempJobs: JobFromDatabase[] = [];
    querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots
      const imageUrl = await getImage(`images/jobs/${doc.id}`);
      const job: JobFromDatabase = {
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        startDate: doc.data().startDate,
        endDate: doc.data().endDate,
        kategory: doc.data().kategory,
        experiences: doc.data().experiences,
        position: doc.data().position,
        pictureUrl: imageUrl,
      };
      tempJobs.push(job);
    });
    console.log("Jobs: ", tempJobs);
    setJobs(tempJobs);
  };

  const createJob = async (job: JobToDatabase, file: File, url?: string) => {
    const inJob: JobToDatabase = {
      name: job.name,
      description: job.description,
      startDate: job.startDate,
      endDate: job.endDate,
      position: job.position,
      kategory: job.kategory,
      experiences: job.experiences,
    };
    await addDoc(collection(firestore, "jobs"), inJob).then((result) => {
      console.log("Document successfully created!: ", result);
      uploadFile(file, `images/jobs/${result.id}`);
      {
        url && setJobs([...jobs, { ...job, id: result.id, pictureUrl: url }]);
      }
    });
  };

  const values = { createJob, jobs };
  return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
}

export default JobContext;
