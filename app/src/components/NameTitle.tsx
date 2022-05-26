import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function NameTitle() {
  return (
    <Box
      sx={{ borderLeft: 2, borderRight: 2, borderColor: "grey" }}
      paddingLeft="40px"
      paddingRight="40px"
    >
      <Stack direction="column" alignItems="center" spacing="0px">
        <Typography fontSize="40px" fontWeight="bold" fontFamily="monospace">
          Daniel
        </Typography>
        <Typography fontSize="40px" fontWeight="bold" fontFamily="monospace">
          Rygaard
        </Typography>
      </Stack>
    </Box>
  );
}
