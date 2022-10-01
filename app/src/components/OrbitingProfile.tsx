import { Box } from "@mui/material";
import React from "react";
import styles from "../styles/Home.module.css";
import earth from "../assets/Earth.png";
import pluto from "../assets/Pluto.png";
import profilePicture from "../assets/ProfilePicture.png";
import mars from "../assets/Mars.png";

export default function OrbitingProfile() {
  return (
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
        bottom={84}
        zIndex={1}
      ></Box>
    </Box>
  );
}
