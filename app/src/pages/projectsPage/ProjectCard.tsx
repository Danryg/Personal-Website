import { Box } from "@mui/material";
import React from "react";
import { ProjectFromDatabase } from "../../utils/GlobalTypes";

import styles from "../../styles/Projects.module.css";

interface ProjectCardProps {
  project: ProjectFromDatabase;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Box className={styles.project}>
      <Box className={styles.projectImage} />
    </Box>
  );
};
