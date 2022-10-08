import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useContext } from "react";
import { firebaseAuth } from "../../config/FirebaseConfig";
import { StorageContextProvider } from "../../contexts/StorageContexte";

import EditHome from "./Home/EditHome";
import EditProjects from "./Projects/EditProjects";
import EditServices from "./Services/EditServices";

export default function LoginAdmin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState<any>(null);

  const [menu, setMenu] = React.useState<"home" | "projects" | "services">(
    "home"
  );

  useEffect(() => {
    const inUser = firebaseAuth.currentUser;
    if (inUser) {
      setUser(inUser);
    }

    console.log("user", user);
  }, []);

  const login = () => {
    signInWithEmailAndPassword(firebaseAuth, email, password).then(
      (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        // ...
      }
    );
  };
  if (!user) {
    return (
      <Box
        width={"100vw"}
        minHeight={"100vh"}
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
          variant="filled"
          size="small"
          color="primary"
          focused
          sx={{ input: { color: "#ffffff" } }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label={"Password"}
          variant="filled"
          size="small"
          color="primary"
          type={"password"}
          focused
          sx={{ input: { color: "#ffffff" } }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={login}>Login</Button>
      </Box>
    );
  } else {
    return (
      <Stack
        gap={5}
        width={"100vw"}
        min-height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        bgcolor={"#181820"}
        flexDirection={"column"}
        paddingBottom={10}
      >
        <Typography
          variant={"h3"}
          fontFamily={"SourceSans"}
          color={"white"}
          marginTop={20}
        >
          Admin
        </Typography>
        <Stack direction={"row"} gap={2}>
          <Button
            onClick={() => setMenu("home")}
            variant={menu === "home" ? "contained" : "outlined"}
          >
            Home
          </Button>
          <Button
            onClick={() => setMenu("projects")}
            variant={menu === "projects" ? "contained" : "outlined"}
          >
            Projects
          </Button>
          <Button
            onClick={() => setMenu("services")}
            variant={menu === "services" ? "contained" : "outlined"}
          >
            Services
          </Button>
        </Stack>
        {menu === "home" && <EditHome />}
        {menu === "projects" && <EditProjects />}
        {menu === "services" && <EditServices />}
      </Stack>
    );
  }
}
