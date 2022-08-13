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
          <Typography className={styles.title} fontSize={60}>
            Daniel
          </Typography>
          <Typography fontSize={35} className={styles.subTitle}>
            Software Developer
          </Typography>
        </Stack>
        <Typography fontSize={15} className={styles.subText}>
          I am a software developer curtrently studying at chalmers university
          of technology and working at We Know IT
        </Typography>
        <Button variant="contained">Contact me</Button>
      </Stack>

      <Box className={styles.imageContainer}>
        <Box
          component={"img"}
          src={profilePicture}
          className={styles.profilePicture}
        />
        <Box position={"absolute"} className={styles.bigOrbit}>
          <Box component={"img"} src={mars} className={styles.bigPlanet} />
        </Box>
        <Box position={"absolute"} className={styles.middleOrbit}>
          <Box component={"img"} src={earth} className={styles.middlePlanet} />
        </Box>
        <Box position={"absolute"} className={styles.littleOrbit}>
          <Box component={"img"} src={pluto} className={styles.smallPlanet} />
        </Box>
        <Box
          position={"absolute"}
          width={"38%"}
          height={2}
          bgcolor={"#43405f"}
          bottom={158}
          zIndex={1}
        ></Box>
      </Box>
      <Box className={styles.buttonContainer}>
        <Box
          className={styles.bigButton}
          onClick={() => {
            navigateWithTransition("Projects");
          }}
        >
          <Stack className={styles.buttonContents}>
            <Box
              component={"img"}
              src={projectsImg}
              className={styles.buttonIcon}
            />
            <Typography fontSize={20} className={styles.buttonTitle}>
              {" "}
              Projects{" "}
            </Typography>
            <Typography fontSize={15} className={styles.buttonText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Stack>
        </Box>
        <Box className={styles.bigButton}>
          <Stack className={styles.buttonContents}>
            <Box
              component={"img"}
              src={brandingImg}
              className={styles.buttonIcon}
            />
            <Typography fontSize={20} className={styles.buttonTitle}>
              {" "}
              Branding{" "}
            </Typography>
            <Typography fontSize={15} className={styles.buttonText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Stack>
        </Box>
        <Box className={styles.bigButton}>
          <Stack className={styles.buttonContents}>
            <Box
              component={"img"}
              src={workImg}
              className={styles.buttonIcon}
            />
            <Typography fontSize={20} className={styles.buttonTitle}>
              {" "}
              Work{" "}
            </Typography>
            <Typography fontSize={15} className={styles.buttonText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
