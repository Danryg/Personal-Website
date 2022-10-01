import styles from "../styles/Home.module.css";
import { Box, Stack, Typography } from "@mui/material";

interface props {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export default function BigTitleButton({
  title,
  description,
  image,
  onClick,
}: props) {
  return (
    <Box className={styles.bigButton} borderRadius={5} onClick={onClick}>
      <Stack className={styles.buttonContents}>
        <Box component={"img"} src={image} className={styles.buttonIcon} />
        <Typography
          fontSize={25}
          className={styles.buttonTitle}
          fontFamily={"SourceSans"}
        >
          {title}
        </Typography>
        <Typography
          fontSize={15}
          className={styles.buttonText}
          fontFamily={"SourceSans"}
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
}
