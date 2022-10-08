import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/Admin.module.css";
interface EditableFieldProps {
  title: string;
  value: string;
  onChange: (value: string) => void;
  edited?: boolean;
  onSave?: () => void;
  onReset?: () => void;
}

export default function EditableField({
  title,
  value,
  onChange,
  edited = false,
  onSave = () => {},
  onReset = () => {},
}: EditableFieldProps) {
  return (
    <Stack className={styles.EditableFieldContainer}>
      <Typography
        color={"white"}
        fontSize={15}
        fontFamily={"SourceSans"}
        fontWeight={"bold"}
      >
        {title}
      </Typography>
      <TextField
        focused
        variant={"filled"}
        value={value}
        inputProps={{ style: { color: "#ffffff" } }}
        onChange={(e) => onChange(e.target.value)}
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
