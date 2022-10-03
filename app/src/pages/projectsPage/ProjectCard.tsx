import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { ProjectFromDatabase } from "../../utils/GlobalTypes";

import styles from "../../styles/Projects.module.css";

interface ProjectCardProps {
  project: ProjectFromDatabase;
  onClick: (project: ProjectFromDatabase) => void;
  style?: React.CSSProperties;
}

export const ProjectCard = ({ project, onClick, style }: ProjectCardProps) => {
  useEffect(() => {}, [project]);
  return (
    <Box
      className={styles.project}
      style={style}
      onClick={() => onClick(project)}
    >
      <Box
        className={styles.projectImage}
        style={{
          backgroundImage: "url(" + project.pictureUrl + ")",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "30px",
        }}
      />
      <Typography fontSize={30} color={"#e4e4e5"} fontFamily={"SourceSans"}>
        {project.title}
      </Typography>
      <Typography fontSize={15} color={"#e4e4e5"} fontFamily={"SourceSans"}>
        {project.description}
      </Typography>
    </Box>
  );
};
