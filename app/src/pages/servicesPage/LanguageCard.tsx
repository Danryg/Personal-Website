import { Box } from "@mui/material";
import React from "react";

import styles from "../../styles/Services.module.css";
import jsLogo from "../../assets/JavaScriptLogo.png";

export default function LanguageCard() {
  return (
    <Box className={styles.languageCardContainer}>
      <Box
        component={"img"}
        src={
          "https://firebasestorage.googleapis.com/v0/b/personal-website-e5fa7.appspot.com/o/images%2FJavaScriptLogo.png?alt=media&token=546b3a61-4d3a-445a-86b4-89aa728360df"
        }
        sx={{
          width: "80%",
        }}
      />
    </Box>
  );
}
