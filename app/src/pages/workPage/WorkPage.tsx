import { Box, Stack } from "@mui/material";
import React, { useContext } from "react";
import JobsList from "../../components/JobsList";
import { Navigationbar } from "../../components/navigations/Navigationbar";
import JobContext from "../../contexts/JobContext";
import styles from "../../styles/Work.module.css";
import WorkCard from "./WorkCard";

export default function WorkPage() {
  const { jobs } = useContext(JobContext);
  return (
    <Box className={styles.PageContainer}>
      <Box className={styles.stripesContainer}>
        <Box className={styles.stripe3} top={"460px"} left={"-400px"} />
        <Box className={styles.stripe} top={"960px"} left={"-450px"} />
        <Box className={styles.stripe3} top={"660px"} left={"-500px"} />
        <Box className={styles.stripe2} top={"40px"} left={"500px"} />
        <Box className={styles.stripe} top={"590px"} left={"500px"} />
      </Box>
      <Navigationbar />

      <JobsList jobs={jobs} />
    </Box>
  );
}
