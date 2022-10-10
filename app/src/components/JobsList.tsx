import { Stack, Typography } from "@mui/material";
import React from "react";
import { JobFromDatabase } from "../utils/GlobalTypes";
import styles from "../styles/Work.module.css";
import WorkCard from "../pages/workPage/WorkCard";
interface Props {
  jobs: JobFromDatabase[];
  title?: string;
}
export default function JobsList({ jobs, title }: Props) {
  return (
    <Stack direction={"column"} alignItems={"center"}>
      <Stack width={"80%"}>
        <Typography
          fontSize={30}
          fontFamily={"SourceSans"}
          lineHeight={1}
          fontWeight={700}
          color={"#FFFFFF"}
        >
          {title ?? "Work"}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems={"center"}
        className={styles.workCardsContainer}
        position={"relative"}
      >
        {jobs.map((job) => (
          <WorkCard job={job} />
        ))}
      </Stack>
    </Stack>
  );
}
