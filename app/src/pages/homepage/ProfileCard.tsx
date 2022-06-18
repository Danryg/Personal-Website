import { Box, Card, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import NameTitle from "./NameTitle";
import fbHelper from "../../services/firebase/firebaseHelper";

import missingProfilePhoto from "../../assets/missingProfilePhoto.png";
export default function ProfileCard() {
  const [occupation, setOccupation] = React.useState<string | undefined>(
    undefined
  );
  const [imageUrl, setImageUrl] = React.useState<string>(missingProfilePhoto);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    if (loading) {
      if (occupation !== undefined) {
        setLoading(false);
      }
    }
    fbHelper.getOccupation().then((respons) => {
      setOccupation(respons.value);
    });
    fbHelper.getProfilePhoto().then((respons) => {
      setImageUrl(respons.value);
    });
  }, [loading, occupation, imageUrl]);

  return (
    <Card>
      <Stack padding={5} alignItems="center" spacing="30px">
        {/*Image*/}
        <Box width="300px" height="300px" borderRadius="50%" overflow="hidden">
          <img src={imageUrl} alt={"Profile Photo"} />
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
