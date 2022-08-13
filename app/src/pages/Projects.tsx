import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigationbar } from "../components/navigations/Navigationbar";

import styles from "../styles/Projects.module.css";

export default function Projects() {
  const [loading, setLoading] = React.useState(true);
  const [enterDone, setEnterDone] = React.useState(false);
  const [exit, setExit] = React.useState(false);
  const [projects, setProjects] = React.useState([]);
  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  });

  const navigate = useNavigate();

  return (
    <Box className={styles.pageContainer}>
      <Box className={styles.stripesContainer}>
        <Box className={styles.stripe} top={"560px"} left={"500px"} />
        <Box className={styles.stripe} top={"530px"} left={"450px"} />
        <Box className={styles.stripe} top={"580px"} left={"550px"} />
      </Box>
      <Navigationbar />

      <Box className={styles.projectsContainer}>
        <Box className={styles.bigProject}>
          <Box className={styles.projectImage} />
        </Box>
        <Box className={styles.project}>
          <Box className={styles.projectImage} />
        </Box>
        <Box className={styles.project}>
          <Box className={styles.projectImage} />
        </Box>
        <Box className={styles.project}>
          <Box className={styles.projectImage} />
        </Box>
        <Box className={styles.project}>
          <Box className={styles.projectImage} />
        </Box>
        <Box className={styles.project}>
          <Box className={styles.projectImage} />
        </Box>
        <Box className={styles.project}>
          <Box className={styles.projectImage} />
        </Box>
        <Box className={styles.project}>
          <Box className={styles.projectImage} />
        </Box>
      </Box>
    </Box>
  );
}
