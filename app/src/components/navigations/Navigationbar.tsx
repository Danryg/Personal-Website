import { Stack, Typography, Button, Box, Slide } from "@mui/material";
import React from "react";
import NavigateTransitionContext from "../../contexts/NavigateTransitionContext";

import styles from "../../styles/components/NavigationBar.module.css";
import NavButton from "./NavButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
export const Navigationbar = () => {
  const matches = useMediaQuery("(max-width:1000px)");
  const [drawer, setDrawer] = React.useState(false);
  const { navigateWithTransition } = React.useContext(
    NavigateTransitionContext
  );

  return matches ? (
    <>
      <Slide in={true}>
        <Box
          className={styles.drawerButton}
          onClick={() => {
            setDrawer(true);
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <MenuIcon style={{ width: "90%", height: "90%" }} />
        </Box>
      </Slide>
      <Slide direction="right" in={drawer}>
        <Box className={styles.drawer}>
          <CloseIcon
            style={{
              position: "relative",
              left: "80%",
              width: "20%",
              height: "40px",
            }}
            onClick={() => {
              setDrawer(false);
            }}
            cursor="pointer"
          />
        </Box>
      </Slide>
    </>
  ) : (
    <Stack
      className={styles.navigationBar}
      direction={"row"}
      justifyContent="space-evenly"
      alignItems={"center"}
    >
      <Typography className={styles.logoText} fontSize={20}>
        Rygaard AB
      </Typography>
      <Stack direction={"row"} spacing={20}>
        <Stack spacing={2} direction={"row"} marginLeft={20}>
          <NavButton
            title="Home"
            onClick={() => {
              navigateWithTransition("/");
            }}
          />
          <NavButton title="About" onClick={() => {}} />
          <NavButton
            title="Service"
            onClick={() => {
              navigateWithTransition("/services");
            }}
          />
          <NavButton title="Testimonials" onClick={() => {}} />
          <NavButton title="Blog" onClick={() => {}} />
        </Stack>

        <Button
          variant="contained"
          style={{
            fontFamily: "SourceSans",
            textTransform: "none",
            backgroundColor: "#414052",
            color: "white",
            zIndex: 5,
          }}
        >
          Hire Me
        </Button>
      </Stack>
    </Stack>
  );
};
