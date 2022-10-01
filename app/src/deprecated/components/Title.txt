import { Stack, Typography } from "@mui/material";
import React from "react";

export default function Title() {
  return (
    <Stack>
      <Typography
        fontSize="80px"
        fontWeight="bold"
        fontFamily="monospace"
        sx={{ height: "80px" }}
      >
        Hello
      </Typography>
      <Typography
        fontSize="50px"
        fontWeight="bold"
        textAlign="center"
        fontFamily="monospace"
        sx={{ height: "100px" }}
      >
        This is me
      </Typography>
    </Stack>
  );
}
