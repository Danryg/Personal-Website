import { Grid, Box, Button } from "@mui/material";
import React from "react";

interface ButtonNavProps {
  navigateTo: Function;
}

export default function ButtonNav({ navigateTo }: ButtonNavProps) {
  return (
    <Grid
      container
      direction="row"
      columns={2}
      wrap="wrap"
      width="400px"
      columnGap={2}
      rowGap={2}
    >
      <Box width="150px">
        <Button
          variant="outlined"
          fullWidth
          size="large"
          sx={{ width: "150px", height: "70px" }}
          onClick={() => navigateTo("projects")}
        >
          Projects
        </Button>
      </Box>
      <Button
        variant="outlined"
        sx={{ width: "150px", height: "70px" }}
        onClick={() => navigateTo("resume")}
      >
        CV
      </Button>
      <Button
        variant="outlined"
        sx={{ width: "150px", height: "70px" }}
        onClick={() => navigateTo("aboutme")}
      >
        WHO AM I
      </Button>
      <Button
        variant="outlined"
        sx={{ width: "150px", height: "70px" }}
        onClick={() => navigateTo("experience")}
      >
        EXPERIENCE
      </Button>
    </Grid>
  );
}
