import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import LanguageCard from "../pages/servicesPage/LanguageCard";
import styles from "../styles/Services.module.css";
import { languageFromDatabase } from "../utils/GlobalTypes";
interface Props {
  languages: languageFromDatabase[];
}

export default function LanguageList({ languages }: Props) {
  useEffect(() => {
    console.log("LanguageList.tsx: useEffect");
    return () => {
      console.log("LanguageList.tsx: useEffect cleanup");
    };
  }, [languages]);
  return (
    <Stack width={"80%"} gap={2}>
      <Typography
        fontFamily={"SourceSans"}
        fontSize={30}
        fontWeight={700}
        color={"white"}
      >
        Computer languages
      </Typography>
      <Stack
        className={styles.languageCards}
        direction={"row"}
        gap={2}
        flexWrap={"wrap"}
      >
        {languages &&
          languages.map((language) => <LanguageCard language={language} />)}
      </Stack>
    </Stack>
  );
}
