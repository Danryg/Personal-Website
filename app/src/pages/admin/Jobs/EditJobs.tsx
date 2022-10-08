import { Button, Stack } from "@mui/material";
import React, { useContext } from "react";
import JobsList from "../../../components/JobsList";
import JobContext from "../../../contexts/JobContext";
import { JobToDatabase } from "../../../utils/GlobalTypes";
import styles from "../../styles/Work.module.css";
import CreateJobModal from "./CreateJobModal";

export default function EditJobs() {
  const { jobs, createJob } = useContext(JobContext);
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Stack
        gap={5}
        width={"100vw"}
        min-height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"#181820"}
        flexDirection={"column"}
        flexWrap={"wrap"}
        paddingBottom={10}
        style={{ minHeight: "100%" }}
      >
        <JobsList jobs={jobs} />
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add Job
        </Button>
      </Stack>
      <CreateJobModal
        open={open}
        onClose={() => setOpen(false)}
        onCreate={(job: JobToDatabase, file: File, url?: string) => {
          createJob(job, file, url);
        }}
      />
    </>
  );
}
