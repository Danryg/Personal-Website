import {
  Box,
  Card,
  CircularProgress,
  Fade,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import NameTitle from "./NameTitle";
import fbHelper from "../../services/firebase/firebaseHelper";
import { storage } from "../../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";

import missingProfilePhoto from "../../assets/missingProfilePhoto.png";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
export default function ProfileCard() {
  const [occupation, setOccupation] = React.useState<string | undefined>(
    undefined
  );
  const [imageUrl, setImageUrl] = React.useState<string>(missingProfilePhoto);
  const [loading, setLoading] = React.useState<boolean>(true);

  getDownloadURL(ref(storage, "images/IMG_5613.JPG"))
    .then((url) => {
      setImageUrl(url);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });

  useEffect(() => {
    if (loading) {
      if (occupation !== undefined) {
      }
    }

    fbHelper.getOccupation().then((respons) => {
      setOccupation(respons.value);
    });
  }, [loading, occupation, imageUrl]);

  const getProfileImage = (): ReactJSXElement => {
    if (loading) {
      return <CircularProgress />;
    }

    return (
      <Fade in={!loading}>
        <img src={imageUrl} alt={"ProfilePhoto"} width="300px" height="450px" />
      </Fade>
    );
  };

  return (
    <Card>
      <Stack padding={5} alignItems="center" spacing="30px">
        {/*Image*/}
        <Box
          width="300px"
          height="300px"
          borderRadius="50%"
          overflow="hidden"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
          {getProfileImage()}
        </Box>
        {/*Name*/}
        <NameTitle />
        <Typography
          fontSize="30px"
          fontWeight="light"
          fontStyle="thin"
          textAlign="center"
          fontFamily="monospace"
        >
          {occupation}
        </Typography>
      </Stack>
      <Box bgcolor="#FAEBD7" width="100%" height="50px" />
    </Card>
  );
}