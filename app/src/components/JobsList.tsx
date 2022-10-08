import { Stack } from "@mui/material";
import React from "react";
import { JobFromDatabase } from "../utils/GlobalTypes";
import styles from "../styles/Work.module.css";
import WorkCard from "../pages/workPage/WorkCard";
interface Props {
  jobs: JobFromDatabase[];
}
export default function JobsList({ jobs }: Props) {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      className={styles.workCardsContainer}
    >
      {jobs.map((job) => (
        <WorkCard job={job} />
      ))}
    </Stack>
  );
}
