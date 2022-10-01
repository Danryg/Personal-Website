import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigationbar } from "../../components/navigations/Navigationbar";
import ProjectsContext from "../../contexts/ProjectsContext";

import styles from "../../styles/Projects.module.css";
import { ProjectFromDatabase } from "../../utils/GlobalTypes";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  const { getProjects, projects } = useContext(ProjectsContext);

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, [loading]);

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
        {projects &&
          projects.forEach((project) => <ProjectCard project={project} />)}
      </Box>
    </Box>
  );
}
