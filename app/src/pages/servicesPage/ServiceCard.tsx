import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/Services.module.css";
import servicebg from "../../assets/servicebg.png";
export default function ServiceCard() {
  return (
    <Stack width={700} height={150} justifyContent="center">
      <Typography
        fontSize={35}
        fontFamily={"SourceSans"}
        color={"white"}
        paddingLeft="30px"
        sx={{ textShadow: "0px 0px 10px #000000" }}
      >
        Fullstack developer
      </Typography>
    </Stack>
  );
}
