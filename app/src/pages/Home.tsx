import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import ProfileCard from "../components/ProfileCard";

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
        spacing={4}
      >
        <Box>
          <ProfileCard />
        </Box>

        <Stack>
          <Stack>
            <Typography
              fontSize="80px"
              fontWeight="bold"
              fontFamily="monospace"
            >
              Hello
            </Typography>
            <Typography
              fontSize="50px"
              fontWeight="bold"
              textAlign="center"
              fontFamily="monospace"
            >
              This is me
            </Typography>
          </Stack>
          <Grid container columns={2} wrap="wrap">
            <Button variant="outlined">Projects</Button>
            <Button variant="outlined">CV</Button>
            <Button variant="outlined">WHO AM I</Button>
            <Button variant="outlined">EXPERIENCE</Button>
          </Grid>
        </Stack>
      </Stack>
    </>
  );
}
