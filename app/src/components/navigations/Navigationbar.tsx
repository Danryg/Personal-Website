import { Stack, Typography, Button } from "@mui/material";
import React from "react";
import NavigateTransitionContext from "../../contexts/NavigateTransitionContext";

import styles from "../../styles/components/NavigationBar.module.css";

export const Navigationbar = () => {
  const { navigateWithTransition } = React.useContext(
    NavigateTransitionContext
  );

  return (
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
          <Button
            className={styles.navButton}
            onClick={() => {
              navigateWithTransition("/");
            }}
          >
            Home
          </Button>
          <Button
            className={styles.navButton}
            onClick={() => {
              navigateWithTransition("/About");
            }}
          >
            About
          </Button>
          <Button
            className={styles.navButton}
            onClick={() => {
              navigateWithTransition("/Service");
            }}
          >
            Service
          </Button>
          <Button
            className={styles.navButton}
            onClick={() => {
              navigateWithTransition("/Testimonial");
            }}
          >
            Testimonial
          </Button>
          <Button
            className={styles.navButton}
            onClick={() => {
              navigateWithTransition("/Blog");
            }}
          >
            Blog
          </Button>
        </Stack>

        <Button variant="contained">Hire Me</Button>
      </Stack>
    </Stack>
  );
};
