import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigationbar } from "../../components/navigations/Navigationbar";
import NavigateTransitionContext from "../../contexts/NavigateTransitionContext";
import ProjectsContext from "../../contexts/ProjectsContext";

import styles from "../../styles/Projects.module.css";
import { ProjectFromDatabase } from "../../utils/GlobalTypes";
import ProjectModal from "./ProjectModal";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  const { getProjects, projects } = useContext(ProjectsContext);
  const { navigateWithTransition } = useContext(NavigateTransitionContext);
  const [loading, setLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [project, setProject] = React.useState<ProjectFromDatabase | null>(
    null
  );

  useEffect(() => {
    if (loading) {
      setLoading(false);
      console.log(projects);
    }
  }, [loading, projects]);

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
          projects.map((project: ProjectFromDatabase) => {
            console.log("Project");
            return (
              <ProjectCard
                project={project}
                key={project.title}
                onClick={(project: ProjectFromDatabase) => {
                  setProject(project);
                  setOpen(true);
                }}
              />
            );
          })}
      </Box>

      {project && (
        <ProjectModal
          open={open}
          project={project}
          onClose={() => setOpen(false)}
        />
      )}
    </Box>
  );
}
