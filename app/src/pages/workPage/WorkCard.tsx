import React from "react";
import { JobFromDatabase } from "../../utils/GlobalTypes";
import styles from "../../styles/Work.module.css";
import { Box, Typography, Stack } from "@mui/material";
import weknowitlogo from "../../assets/weknowitlogo.png";

interface Props {
  job: JobFromDatabase;
}

export default function WorkCard({ job }: Props) {
  return (
    <Box className={styles.workCardContainer} key={job.id}>
      <Box
        className={styles.workCardImage}
        style={{ backgroundImage: "url(" + job.pictureUrl + ")" }}
        width={"45%"}
      />
      <Stack width={"42%"}>
        <Typography
          variant="h5"
          className={styles.workCardTitle}
          fontFamily={"SourceSans"}
          fontWeight={"bold"}
          lineHeight={1}
        >
          {job.name}
        </Typography>
        <Typography
          fontSize={20}
          className={styles.workCardPosition}
          fontFamily={"SourceSans"}
          lineHeight={1.3}
        >
          {job.position}
        </Typography>
        <Typography
          className={styles.workCardDate}
          fontFamily={"SourceSans"}
          lineHeight={1}
        >
          {job.startDate} - {job.endDate}
        </Typography>

        <Typography
          variant="body1"
          className={styles.workCardDescription}
          fontFamily={"SourceSans"}
        >
          {job.description}
        </Typography>
      </Stack>
    </Box>
  );
}
