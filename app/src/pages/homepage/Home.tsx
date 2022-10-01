import { Box, Button, Stack, Typography } from "@mui/material";
import earth from "../../assets/Earth.png";
import pluto from "../../assets/Pluto.png";
import profilePicture from "../../assets/ProfilePicture.png";
import mars from "../../assets/Mars.png";

import projectsImg from "../../assets/projects.png";
import brandingImg from "../../assets/branding.png";
import workImg from "../../assets/work.png";

import React, { useContext, useState } from "react";

import styles from "../../styles/Home.module.css";
import { useNavigate } from "react-router-dom";

import { Navigationbar } from "../../components/navigations/Navigationbar";
import NavigateTransitionContext from "../../contexts/NavigateTransitionContext";
import BigTitleButton from "../../components/BigTitleButton";
import OrbitingProfile from "../../components/OrbitingProfile";

export const Home = () => {
  const { navigateWithTransition } = useContext(NavigateTransitionContext);
  return (
    <Box width={"100%"} height={"100vh"} bgcolor={"#25253F"} overflow="hidden">
      <Box className={styles.stripesContainer}>
        <Box className={styles.stripe} top={"450px"} left={"-450px"} />
        <Box className={styles.stripe} top={"530px"} left={"-530px"} />
        <Box className={styles.stripe} top={"580px"} left={"-580px"} />
      </Box>

      <Navigationbar />
      <Stack
        direction={"column"}
        gap={"50px"}
        className={styles.titleContainer}
      >
        <Stack direction={"column"}>
          <Typography
            className={styles.title}
            fontSize={60}
            fontFamily={"SourceSans"}
            fontWeight={700}
          >
            Daniel
          </Typography>
          <Typography
            fontSize={60}
            className={styles.subTitle}
            fontFamily={"SourceSans"}
            lineHeight={1}
            fontWeight={700}
          >
            Software Developer
          </Typography>
        </Stack>
        <Typography fontSize={15} className={styles.subText}>
          I am a software developer curtrently studying at chalmers university
          of technology and working at We Know IT
        </Typography>
        <Button variant="contained">Contact me</Button>
      </Stack>

      <OrbitingProfile />
      <Stack className={styles.buttonContainer} direction={"row"} gap={2}>
        <BigTitleButton
          title={"Projects"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          image={projectsImg}
          link={""}
        />
        <BigTitleButton
          title={"Branding"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          image={brandingImg}
          link={""}
        />
        <BigTitleButton
          title={"Work"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          image={workImg}
          link={""}
        />
      </Stack>
    </Box>
  );
};
