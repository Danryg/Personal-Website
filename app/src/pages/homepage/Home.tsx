import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import ProfileCard from "./ProfileCard";
import { useNavigate } from "react-router-dom";
import Title from "./Title";
import ButtonNav from "./ButtonNav";

export default function Home() {
  return (
    <>
      <Box
        maxWidth="100vw"
        maxHeight="100vh"
        overflow="hidden"
        position="absolute"
      >
        <Box
          bgcolor="#F5F0DC"
          position="relative"
          sx={{
            transform: "rotate(-40deg)",
            height: "1501.5681289728393px",
            width: "2095px",
            left: "-500px",
            top: "-900px",
          }}
        />
      </Box>
      <Stack
        width="100vw"
        height="100vh"
        direction="row"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        spacing={20}
      >
        <Box>
          <ProfileCard />
        </Box>

        <Stack>
          <Title />
          <ButtonNav />
        </Stack>
        <Box width="200px" />
      </Stack>
    </>
  );
}
