import { Box, Fade, Slide, Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/Projects.module.css";
import { ProjectFromDatabase } from "../../utils/GlobalTypes";

interface props {
  project: ProjectFromDatabase;
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, open, onClose }: props) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Fade in={open} onEntered={() => setIsOpen(true)}>
      <Box className={styles.modalContainer}>
        <Slide in={isOpen} onExited={onClose}>
          <Box className={styles.modal}>
            <Box
              className={styles.modalImage}
              onClick={() => setIsOpen(false)}
            />
            <Box className={styles.modalText}>
              <Typography
                fontSize={40}
                fontFamily={"SourceSans"}
                color={"white"}
              >
                {project.title}
              </Typography>
              <Box className={styles.modalDescription}>
                {project.describtion}
                <Box className={styles.modalLinks}></Box>
              </Box>
            </Box>
          </Box>
        </Slide>
      </Box>
    </Fade>
  );
}
