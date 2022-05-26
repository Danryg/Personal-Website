import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import fbHelper from "../../services/firebase/firebaseHelper";

export default function NameTitle() {
  const [firstName, setFirstName] = React.useState<string | undefined>(
    undefined
  );
  const [lastName, setLastName] = React.useState<string | undefined>(undefined);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    if (loading) {
      if (firstName !== undefined && lastName !== undefined) {
        setLoading(false);
      }
    }

    fbHelper.getFirstName().then((respons) => {
      setFirstName(respons.value);
    });

    fbHelper.getLastName().then((respons) => {
      setLastName(respons.value);
    });
  });

  return (
    <Box
      sx={{ borderLeft: 2, borderRight: 2, borderColor: "grey" }}
      paddingLeft="40px"
      paddingRight="40px"
    >
      <Stack direction="column" alignItems="center" spacing="0px">
        <Typography fontSize="40px" fontWeight="bold" fontFamily="monospace">
          {firstName}
        </Typography>
        <Typography fontSize="40px" fontWeight="bold" fontFamily="monospace">
          {lastName}
        </Typography>
      </Stack>
    </Box>
  );
}
