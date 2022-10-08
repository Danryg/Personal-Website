import React, { useEffect } from "react";
import { JobToDatabase } from "../../../utils/GlobalTypes";
import Modal from "../../../components/Modal";
import { Box, Button, Stack, Typography } from "@mui/material";
import EditableField from "../../../components/admin/EditableField";
import EditableMultiline from "../../../components/admin/EditableMultiline";
import styles from "../../../styles/Work.module.css";
interface props {
  open: boolean;
  onClose: () => void;
  onCreate: (job: JobToDatabase, file: File, url?: string) => void;
}
export default function CreateJobModal({ open, onClose, onCreate }: props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [picture, setPicture] = React.useState<File | undefined>(undefined);
  const [startDate, setStartDate] = React.useState<string>("");
  const [endDate, setEndDate] = React.useState<string>("");
  const [position, setPosition] = React.useState<string>("");
  const [kategory, setKategory] = React.useState<string>("");
  const [pictureUrl, setPictureUrl] = React.useState<string | undefined>(
    undefined
  );
  const [job, setJob] = React.useState<JobToDatabase>({
    name,
    description,
    startDate,
    endDate,
    position,
    kategory,
    experiences: [],
  });
  useEffect(() => {
    setJob({
      name,
      description,
      startDate,
      endDate,
      position,
      kategory,
      experiences: [],
    });
  }, [name, description, picture, startDate, endDate, position, kategory]);
  return (
    <Modal
      open={open}
      onClose={() => {
        onClose();
      }}
    >
      <Typography variant={"h5"} color={"white"} fontFamily={"SourceSans"}>
        Add job
      </Typography>
      <Stack direction={"row"} marginBottom={2}>
        <Stack>
          <EditableField title={"Name"} value={name} onChange={setName} />
          <EditableMultiline
            title={"Description"}
            value={description}
            onChange={setDescription}
          />
          {picture && (
            <Box
              bgcolor={"white"}
              width={"90%"}
              height={"100%"}
              marginTop={10}
              className={styles.workCardImage}
              style={{
                backgroundImage: `url(${URL.createObjectURL(picture)})`,
              }}
            />
          )}
        </Stack>
        <Stack>
          <EditableField
            title={"Start date"}
            value={startDate}
            onChange={setStartDate}
          />
          <EditableField
            title={"End date"}
            value={endDate}
            onChange={setEndDate}
          />
          <EditableField
            title={"Position"}
            value={position}
            onChange={setPosition}
          />
          <EditableField
            title={"Kategory"}
            value={kategory}
            onChange={setKategory}
          />
          <input
            onChange={(e) => {
              setPicture(e.target.files[0]);
              setPictureUrl(URL.createObjectURL(e.target.files[0]));
            }}
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </Stack>
      </Stack>
      <Button
        variant="contained"
        color="info"
        onClick={() => {
          onCreate(job, picture!, pictureUrl);
        }}
      >
        Create
      </Button>
    </Modal>
  );
}
