import { Box, Button, Stack, Typography } from "@mui/material";
import earth from "../../assets/Earth.png";
import pluto from "../../assets/Pluto.png";
import profilePicture from "../../assets/ProfilePicture.png";
import mars from "../../assets/Mars.png";

import projectsImg from "../../assets/projects.png";
import brandingImg from "../../assets/branding.png";
import workImg from "../../assets/work.png";

import React, { useEffect, useContext, useState } from "react";

import styles from "../../styles/Home.module.css";
import { useNavigate } from "react-router-dom";

import { Navigationbar } from "../../components/navigations/Navigationbar";
import NavigateTransitionContext from "../../contexts/NavigateTransitionContext";
import BigTitleButton from "../../components/BigTitleButton";
import OrbitingProfile from "../../components/OrbitingProfile";
import useMediaQuery from "@mui/material/useMediaQuery";
import ContentContext from "../../contexts/ContentContext";
export const Home = () => {
  const matches = useMediaQuery("(min-width:1600px)");
  const { navigateWithTransition } = useContext(NavigateTransitionContext);
  const { homeContent } = useContext(ContentContext);

  useEffect(() => {}, [homeContent]);

  if (!homeContent) {
    return (
      <Box
        width={"100vw"}
        minHeight={"100vh"}
        bgcolor={"#181820"}
        overflow={"hidden"}
        style={{ overflowX: "hidden", overflowY: "hidden" }}
      ></Box>
    );
  }

  return (
    <Box
      width={"100vw"}
      minHeight={"100vh"}
      bgcolor={"#181820"}
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
              {homeContent.name}
            </Typography>
            <Typography
              fontSize={60}
              className={styles.subTitle}
              fontFamily={"SourceSans"}
              lineHeight={1}
              fontWeight={700}
            >
              {homeContent.title}
            </Typography>
          </Stack>
          <Typography
            fontSize={15}
            className={styles.subText}
            fontFamily={"SourceSans"}
          >
            {homeContent.occupation}
          </Typography>
          <Button
            variant="contained"
            style={{
              fontFamily: "SourceSans",
              fontWeight: 700,
              width: 200,
              backgroundColor: "#181820",
              color: "white",
              border: "1px solid white",
            }}
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
            description={homeContent.projects}
            image={projectsImg}
            onClick={() => navigateWithTransition("/projects")}
          />
          <BigTitleButton
            title={"Services"}
            description={homeContent.services}
            image={brandingImg}
            onClick={() => navigateWithTransition("/projects")}
          />
          <BigTitleButton
            title={"Work"}
            description={homeContent.work}
            image={workImg}
            onClick={() => navigateWithTransition("/projects")}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
