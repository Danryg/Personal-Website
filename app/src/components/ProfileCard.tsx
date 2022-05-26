import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import NameTitle from "./NameTitle";

export default function ProfileCard() {
  return (
    <Card>
      <Stack padding={5} alignItems="center" spacing="30px">
        {/*Image*/}
        <Box
          bgcolor="#000000"
          width="300px"
          height="300px"
          borderRadius="50%"
        />
        {/*Name*/}
        <NameTitle />
        <Typography
          fontSize="30px"
          fontWeight="light"
          fontStyle="thin"
          textAlign="center"
          fontFamily="monospace"
        >
          IT - Student
        </Typography>
      </Stack>
      <Box bgcolor="#FAEBD7" width="100%" height="50px" />
    </Card>
  );
}
