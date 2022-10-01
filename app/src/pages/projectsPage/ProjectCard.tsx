import { Box, Typography } from "@mui/material";
import React from "react";
import { ProjectFromDatabase } from "../../utils/GlobalTypes";

import styles from "../../styles/Projects.module.css";

interface ProjectCardProps {
  project: ProjectFromDatabase;
  onClick: (project: ProjectFromDatabase) => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <Box className={styles.project} onClick={() => onClick(project)}>
      <Box className={styles.projectImage} />
      <Typography fontSize={30} color={"#e4e4e5"} fontFamily={"SourceSans"}>
        {project.title}
      </Typography>
      <Typography fontSize={15} color={"#e4e4e5"} fontFamily={"SourceSans"}>
        {project.describtion}
      </Typography>
    </Box>
  );
};
