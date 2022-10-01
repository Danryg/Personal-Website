import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Navigationbar } from "../../components/navigations/Navigationbar";
import styles from "../../styles/Services.module.css";
import LanguageCard from "./LanguageCard";

export default function ServicesPage() {
  return (
    <Box className={styles.pageContainer} zIndex={-1}>
      <Box className={styles.stripesContainer}>
        <Box className={styles.stripe} top={"660px"} left={"-400px"} />
        <Box className={styles.stripe} top={"660px"} left={"-450px"} />
        <Box className={styles.stripe} top={"660px"} left={"-500px"} />
        <Box className={styles.stripe} top={"40px"} left={"500px"} />
        <Box className={styles.stripe} top={"590px"} left={"500px"} />
      </Box>
      <Navigationbar />

      <Box className={styles.content} zIndex={2}>
        <Stack
          className={styles.contentStack}
          direction={"column"}
          width={"90%"}
          zIndex={2}
        >
          <Typography
            fontFamily={"SourceSans"}
            fontSize={50}
            fontWeight={700}
            color={"white"}
            zIndex={2}
          >
            Services
          </Typography>
          <Typography
            fontFamily={"SourceSans"}
            fontWeight={700}
            color={"lightgrey"}
            width={"50%"}
            marginBottom={"50px"}
          >
            I am a software developer with a passion for creating beautiful and
            user friendly applications. I have experience in both frontend and
            backend development. I am currently studying at Chalmers University
            of Technology in Gothenburg, Sweden. I am looking for a job as a
            software developer where I can use my skills to create great
            products. I am also open to freelance work.
          </Typography>
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
            <LanguageCard />
            <LanguageCard />
            <LanguageCard />
            <LanguageCard />
            <LanguageCard />
            <LanguageCard />
            <LanguageCard />
            <LanguageCard />
            <LanguageCard />
          </Stack>
          <Typography
            fontFamily={"SourceSans"}
            fontSize={30}
            fontWeight={700}
            color={"white"}
          >
            Frameworks
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
