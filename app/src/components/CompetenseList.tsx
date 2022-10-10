import { Stack } from "@mui/material";
import React, { useContext } from "react";
import ServiceContext from "../contexts/ServiceContext";
import LanguageList from "./LanguageList";

export default function CompetenseList() {
  const { languages } = useContext(ServiceContext);

  return (
    <Stack width={"100vw"}>
      <LanguageList languages={languages} />
    </Stack>
  );
}
