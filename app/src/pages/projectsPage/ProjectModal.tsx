import { Box, Button, Fade, Slide, Stack, Typography } from "@mui/material";
import { url } from "inspector";
import React, { useCallback, useState, useEffect, useRef } from "react";
import styles from "../../styles/Projects.module.css";
import { ProjectFromDatabase } from "../../utils/GlobalTypes";
import LanguageCard from "../servicesPage/LanguageCard";
import GitHubIcon from "@mui/icons-material/GitHub";
import { style } from "@mui/system";
interface props {
  project: ProjectFromDatabase;
  open: boolean;
  onClose: () => void;
}
const SCROLL_BOX_MIN_HEIGHT = 20;
export default function ProjectModal({ project, open, onClose }: props) {
  const [isOpen, setIsOpen] = useState(false);

  const [hovering, setHovering] = useState(false);
  const [scrollBoxHeight, setScrollBoxHeight] = useState(SCROLL_BOX_MIN_HEIGHT);
  const [scrollBoxTop, setScrollBoxTop] = useState(0);

  const handleMouseOver = useCallback(() => {
    !hovering && setHovering(true);
  }, [hovering]);
  const handleMouseOut = useCallback(() => {
    !!hovering && setHovering(false);
  }, [hovering]);

  const handleScroll = useCallback(() => {
    if (!scrollHostRef) {
      return;
    }
    const scrollHostElement: any = scrollHostRef.current;
    const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement;

    let newTop =
      (parseInt(scrollTop, 10) / parseInt(scrollHeight, 10)) * offsetHeight;
    console.log(newTop, scrollBoxHeight, scrollTop, scrollHeight, offsetHeight);

    console.log(offsetHeight - scrollBoxHeight);
    // newTop = newTop + parseInt(scrollTop, 10);
    newTop = Math.min(newTop, offsetHeight - scrollBoxHeight);
    setScrollBoxTop(newTop);
  }, []);

  const scrollHostRef = useRef();

  useEffect(() => {
    const scrollHostElement: any = scrollHostRef.current;
    const { clientHeight, scrollHeight } = scrollHostElement;
    const scrollBoxPercentage = clientHeight / scrollHeight;
    const scrollbarHeight = Math.max(
      scrollBoxPercentage * clientHeight,
      SCROLL_BOX_MIN_HEIGHT
    );
    setScrollBoxHeight(scrollbarHeight * 0.95);
    scrollHostElement.addEventListener("scroll", handleScroll, true);
    return function cleanup() {
      scrollHostElement.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <Fade in={open} onEntered={() => setIsOpen(true)}>
      <Box className={styles.modalContainer}>
        <Slide in={isOpen} onExited={onClose}>
          <Box
            className={styles.modal}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Box ref={scrollHostRef} className={styles.scrollhost}>
              <Box
                style={{
                  width: "100%",
                  minHeight: "400px",
                  maxHeight: "50%",
                  backgroundImage: "url(" + project.pictureUrl + ")",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "30px",
                }}
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
                  {project.description}
                  <Box className={styles.modalLinks}></Box>
                </Box>
                <Typography
                  fontSize={30}
                  fontFamily={"SourceSans"}
                  color={"white"}
                >
                  Resources
                </Typography>
                <Box className={styles.modalDescription}>
                  {project.description}
                  <Box className={styles.modalLinks}></Box>
                </Box>
                <Typography
                  fontSize={30}
                  fontFamily={"SourceSans"}
                  color={"white"}
                >
                  Languages and frameworks
                </Typography>
                <Stack
                  width={"90%"}
                  direction={"row"}
                  marginLeft={"5%"}
                  marginTop="20px"
                >
                  <LanguageCard
                    onClick={() => {}}
                    language={undefined}
                    onDelete={() => {}}
                    onEdit={() => {}}
                  />
                </Stack>
                <Box marginTop={5}>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant={"contained"}
                    endIcon={<GitHubIcon />}
                  >
                    <Typography
                      fontSize={15}
                      fontFamily={"SourceSans"}
                      fontWeight={"bold"}
                    >
                      Github
                    </Typography>
                  </Button>
                </Box>
              </Box>
              <Box height={50} />
            </Box>
            <Box
              className={styles.scroll_bar}
              style={{ opacity: hovering ? 1 : 0 }}
            >
              <Box
                className={styles.scroll_thumb}
                style={{ height: scrollBoxHeight, top: scrollBoxTop }}
              />
            </Box>
          </Box>
        </Slide>
      </Box>
    </Fade>
  );
}
