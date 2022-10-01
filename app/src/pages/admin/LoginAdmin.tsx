import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function LoginAdmin() {
  const login = () => {
    console.log("login");
  };
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      bgcolor={"#181820"}
      flexDirection={"column"}
    >
      <Typography
        variant={"h3"}
        fontFamily={"SourceSans"}
        color={"white"}
        marginTop={20}
      >
        Admin login
      </Typography>
      <TextField
        label={"Username"}
        defaultValue="Small"
        variant="filled"
        size="small"
        color="primary"
        focused
        sx={{ input: { color: "#ffffff" } }}
      />
      <TextField
        label={"Password"}
        defaultValue="Small"
        variant="filled"
        size="small"
        color="primary"
        type={"password"}
        focused
        sx={{ input: { color: "#ffffff" } }}
      />
      <Button onClick={login}>Login</Button>
    </Box>
  );
}
