import React from "react";
import { Typography, Box, TextField, Button, Stack } from "@mui/material";
import styles from "../../styles/Admin.module.css";
interface EditableMultilineProps {
  title: string;
  value: string;
  onChange: (value: string) => void;
  edited?: boolean;
  onSave?: () => void;
  onReset?: () => void;
}
export default function EditableMultiline({
  title,
  value,
  onChange,
  edited = false,
  onSave = () => {},
  onReset = () => {},
}: EditableMultilineProps) {
  return (
    <Stack className={styles.MultilineContainer}>
      <Typography
        color={"white"}
        fontSize={35}
        fontFamily={"SourceSans"}
        fontWeight={"bold"}
      >
        {title}
      </Typography>
      <TextField
        multiline
        minRows={2}
        maxRows={6}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        variant={"outlined"}
        color={"secondary"}
        inputProps={{ style: { color: "#ffffff" } }}
        sx={{ input: { color: "#ffffff" } }}
        focused
      />
      {edited && (
        <Stack direction={"row"} marginTop={2}>
          <Button variant="contained" color="success" onClick={onSave}>
            Save
          </Button>
          <Button variant="contained" color="error" onClick={onReset}>
            Discard
          </Button>
        </Stack>
      )}
    </Stack>
  );
}
