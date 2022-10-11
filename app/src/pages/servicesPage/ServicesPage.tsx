import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Navigationbar } from "../../components/navigations/Navigationbar";
import ContentContext from "../../contexts/ContentContext";
import ServiceContext from "../../contexts/ServiceContext";
import styles from "../../styles/Services.module.css";
import LanguageCard from "./LanguageCard";
import ServiceCard from "./ServiceCard";

export default function ServicesPage() {
  const { serviceContent } = useContext(ContentContext);
  const { languages } = useContext(ServiceContext);
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
            {serviceContent.title}
          </Typography>
          <Typography
            fontFamily={"SourceSans"}
            fontWeight={700}
            color={"lightgrey"}
            width={"50%"}
            marginBottom={"50px"}
          >
            {serviceContent.description}
          </Typography>
          <Typography
            fontFamily={"SourceSans"}
            fontSize={30}
            fontWeight={700}
            color={"white"}
          >
            What can i do for you?
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            className={styles.servicesContainer}
            position={"relative"}
          >
            <ServiceCard />
          </Stack>
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
            {languages.map((language) => (
              <LanguageCard language={language} />
            ))}
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
