import { Fade, Box, Slide, Typography } from "@mui/material";
import React from "react";
import styles from "../styles/components/Modal.module.css";
import CloseIcon from "@mui/icons-material/Close";
interface props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Modal({ open, onClose, children, style }: props) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Fade in={open} onEntered={() => setIsOpen(true)}>
      <Box className={styles.modalContainer}>
        <Slide in={isOpen} onExited={onClose}>
          {style ? (
            <Box style={style}>{children}</Box>
          ) : (
            <Box className={styles.modal}>
              {children}
              <CloseIcon
                style={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                  color: "white",
                  width: 40,
                  height: 40,
                  cursor: "pointer",
                }}
                onClick={() => setIsOpen(false)}
              />
            </Box>
          )}
        </Slide>
      </Box>
    </Fade>
  );
}
