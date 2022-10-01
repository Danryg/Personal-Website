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
import useMediaQuery from "@mui/material/useMediaQuery";

export const Home = () => {
  const matches = useMediaQuery("(min-width:1600px)");
  const { navigateWithTransition } = useContext(NavigateTransitionContext);
  return (
    <Box
      width={"100vw"}
      minHeight={"100vh"}
      bgcolor={"#25253F"}
      overflow={"hidden"}
      style={{ overflowX: "hidden", overflowY: "hidden" }}
    >
      <Box className={styles.stripesContainer}>
        <Box className={styles.stripe} top={"450px"} left={"-450px"} />
        <Box className={styles.stripe} top={"530px"} left={"-530px"} />
        <Box className={styles.stripe} top={"580px"} left={"-580px"} />
      </Box>

      <Navigationbar />
      <Stack direction={"row"} flexWrap={"wrap"}>
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
          <Typography
            fontSize={15}
            className={styles.subText}
            fontFamily={"SourceSans"}
          >
            I am a software developer curtrently studying at chalmers university
            of technology and working at We Know IT
          </Typography>
          <Button
            variant="contained"
            style={{ fontFamily: "SourceSans", fontWeight: 700, width: 200 }}
          >
            Contact me
          </Button>
        </Stack>

        <OrbitingProfile />
        <Stack
          className={styles.buttonContainer}
          direction={"row"}
          gap={2}
          flexWrap={"wrap"}
        >
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
      </Stack>
    </Box>
  );
};
