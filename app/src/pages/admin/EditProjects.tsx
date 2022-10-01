import { Stack } from "@mui/material";
import React from "react";
import styles from "../../styles/Admin.module.css";
import { ProjectFromDatabase } from "../../utils/GlobalTypes";
export default function EditProjects() {
  return (
    <Stack
      gap={5}
      width={"100vw"}
      min-height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      bgcolor={"#181820"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      paddingBottom={10}
    ></Stack>
  );
}

interface SmallProjectCardProps {
  project: ProjectFromDatabase;
}
function SmallProjectCard({ project }: SmallProjectCardProps) {
  return <Stack direction={"row"}></Stack>;
}
