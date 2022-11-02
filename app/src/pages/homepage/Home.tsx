import {
  Box,
  Button,
  Fade,
  Slide,
  Stack,
  TextField,
  Typography,
  withStyles,
} from "@mui/material";
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
import CloseIcon from "@mui/icons-material/Close";

export const Home = () => {
  const matches = useMediaQuery("(min-width:1600px)");
  const { navigateWithTransition, done } = useContext(
    NavigateTransitionContext
  );
  const [show, setShow] = useState(10);
  const { homeContent } = useContext(ContentContext);
  const [showContactMe, setShowConntactMe] = useState(false);

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
      <Box
        height={"100vh"}
        width={"100vw"}
        overflow={"hidden"}
        position={"absolute"}
      >
        <Box className={styles.stripesContainer}>
          <Slide in={show > 0} direction={"right"}>
            <Box>
              <Box className={styles.stripe} top={"650px"} left={"-450px"} />
              <Box className={styles.stripe} top={"730px"} left={"-530px"} />
              <Box className={styles.stripe} top={"780px"} left={"-580px"} />
            </Box>
          </Slide>
        </Box>
      </Box>

      <Navigationbar />

      <Stack direction={"row"} flexWrap={"wrap"}>
        {showContactMe ? (
          <Fade in={done}>
            <Stack
              direction={"column"}
              gap={"10px"}
              className={styles.contactMeContainer}
              bgcolor={"#181820"}
              borderRadius={"10px"}
              alignItems={"center"}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"90%"}
              >
                <Typography
                  className={styles.title}
                  fontSize={40}
                  fontFamily={"SourceSans"}
                  fontWeight={700}
                >
                  Contact me
                </Typography>
                <CloseIcon
                  onClick={() => setShowConntactMe(false)}
                  className={styles.closeIcon}
                  color={"secondary"}
                  fontSize={"large"}
                  cursor={"pointer"}
                />
              </Stack>
              <Stack gap={2} width={"80%"}>
                <Stack>
                  <Typography
                    fontSize={20}
                    className={styles.buttonTitle}
                    fontFamily={"SourceSans"}
                  >
                    Name
                  </Typography>
                  <TextField
                    color="secondary"
                    sx={{
                      input: { color: "secondary" },
                      "& label.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "white",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                    }}
                    InputProps={{
                      className: styles.textInputProps,
                      style: { fontFamily: "SourceSans" },
                    }}
                    variant="standard"
                  />
                </Stack>
                <Stack>
                  <Typography
                    fontSize={20}
                    className={styles.buttonTitle}
                    fontFamily={"SourceSans"}
                  >
                    Mail
                  </Typography>
                  <TextField
                    variant="standard"
                    color="secondary"
                    sx={{
                      input: { color: "secondary" },
                      "& label.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "white",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                    }}
                    InputProps={{
                      className: styles.textInputProps,
                      style: { fontFamily: "SourceSans" },
                    }}
                  />
                </Stack>
                <Stack width={"100%"}>
                  <Typography
                    fontSize={20}
                    className={styles.buttonTitle}
                    fontFamily={"SourceSans"}
                  >
                    Message
                  </Typography>
                  <TextField
                    fullWidth={true}
                    variant="outlined"
                    color="secondary"
                    sx={{
                      input: { color: "primary" },
                      "& label.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "white",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                    }}
                    InputProps={{
                      className: styles.textInputProps,
                      style: { fontFamily: "SourceSans" },
                    }}
                    multiline
                    rows={4}
                  />
                </Stack>
              </Stack>
              <Stack
                width={"80%"}
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Box />
                <Button variant="contained">Submit</Button>
              </Stack>
            </Stack>
          </Fade>
        ) : (
          <Stack
            direction={"column"}
            gap={"50px"}
            className={styles.titleContainer}
          >
            <Fade in={done}>
              <Stack direction={"column"}>
                <Typography
                  className={styles.title}
                  fontSize={60}
                  fontFamily={"SourceSans"}
                  fontWeight={700}
                >
                  {homeContent.name}
                </Typography>
                <Fade in={show > 0}>
                  <Typography
                    fontSize={60}
                    className={styles.subTitle}
                    fontFamily={"SourceSans"}
                    lineHeight={1}
                    fontWeight={700}
                  >
                    {homeContent.title}
                  </Typography>
                </Fade>
              </Stack>
            </Fade>
            <Fade in={show > 1}>
              <Typography
                fontSize={15}
                className={styles.subText}
                fontFamily={"SourceSans"}
              >
                {homeContent.occupation}
              </Typography>
            </Fade>
            <Fade in={show > 2}>
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
                onClick={() => {
                  setShowConntactMe(true);
                }}
              >
                Contact me
              </Button>
            </Fade>
          </Stack>
        )}

        <Fade in={done} onEntered={() => {}}>
          <Box style={{ position: "relative" }} width="50%">
            <OrbitingProfile />
          </Box>
        </Fade>
        <Fade in={show > 2}>
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
              onClick={() => navigateWithTransition("/services")}
            />
            <BigTitleButton
              title={"Work"}
              description={homeContent.work}
              image={workImg}
              onClick={() => navigateWithTransition("/work")}
            />
          </Stack>
        </Fade>
      </Stack>
    </Box>
  );
};
