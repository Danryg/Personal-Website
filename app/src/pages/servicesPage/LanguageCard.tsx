import { Box, Button, Fade } from "@mui/material";
import React from "react";

import styles from "../../styles/Services.module.css";
import jsLogo from "../../assets/JavaScriptLogo.png";
import { languageFromDatabase } from "../../utils/GlobalTypes";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
interface porps {
  onClick?: () => void;
  language?: languageFromDatabase;
  onDelete?: (lang: languageFromDatabase) => void;
  onEdit?: (lang: languageFromDatabase) => void;
  hover?: boolean;
}

export default function LanguageCard({
  onClick,
  language,
  onDelete,
  onEdit,
  hover: hoverEnabled,
}: porps) {
  const [hover, setHover] = React.useState(false);
  return (
    <Box
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={styles.card}
    >
      {language ? (
        <Box className={styles.languageCardContainer}>
          <Box
            component={"img"}
            src={language.pictureUrl}
            sx={{
              width: "80%",
            }}
          />
        </Box>
      ) : (
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
      )}
      {hover && hoverEnabled && (
        <Fade in={hover}>
          <Box className={styles.languageHoverTools}>
            <Button
              variant="contained"
              color="error"
              onClick={() => onDelete(language)}
            >
              <DeleteIcon />
            </Button>
            <Button
              variant="contained"
              color="info"
              onClick={() => onEdit(language)}
            >
              <EditIcon />
            </Button>
          </Box>
        </Fade>
      )}
    </Box>
  );
}
