import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import CompetenseList from "../../components/CompetenseList";
import JobsList from "../../components/JobsList";
import { Navigationbar } from "../../components/navigations/Navigationbar";
import JobContext from "../../contexts/JobContext";

export default function AboutPage() {
  const { jobs } = useContext(JobContext);

  return (
    <Stack
      width={"100vw"}
      minHeight={"100vh"}
      bgcolor={"#181820"}
      overflow={"hidden"}
      style={{ overflowX: "hidden", overflowY: "hidden" }}
      gap={5}
    >
      <Navigationbar />
      <Stack width={"100%"} alignItems={"center"}>
        <Stack width={"90%"} gap={5}>
          <Typography
            fontSize={60}
            fontFamily={"SourceSans"}
            lineHeight={1}
            fontWeight={700}
            color={"#FFFFFF"}
          >
            About Me
          </Typography>
          <Typography
            fontSize={17}
            fontFamily={"SourceSans"}
            lineHeight={1}
            fontWeight={700}
            color={"#FFFFFF"}
            width={"40%"}
          >
            I am a software developer with a passion for creating beautiful and
            functional applications. I have a bachelor's degree in computer
            science and have been working as a software developer for 1 year. I
            have experience with both frontend and backend development and have
            worked with a wide range of technologies. I am currently working as
            a fullstack developer at We know IT.
          </Typography>
          <CompetenseList />
          <JobsList jobs={jobs} />
        </Stack>
      </Stack>
    </Stack>
  );
}
