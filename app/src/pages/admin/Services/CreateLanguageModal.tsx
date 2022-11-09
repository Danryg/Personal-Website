import { Typography, Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import EditableField from "../../../components/admin/EditableField";
import Modal from "../../../components/Modal";
import {
  frameWorkFromDatabase,
  frameWorkToDatabase,
  languageFromDatabase,
  languageToDatabase,
} from "../../../utils/GlobalTypes";
import LanguageCard from "../../servicesPage/LanguageCard";

interface props {
  open: boolean;
  onClose: () => void;
  onCreate: (
    language: languageToDatabase | frameWorkToDatabase,
    file: File,
    url?: string
  ) => void;
}
export default function CreateLanguageModal({
  open,
  onClose,
  onCreate,
}: props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [pictureUrl, setPictureUrl] = React.useState(
    "https://firebasestorage.googleapis.com/v0/b/personal-website-e5fa7.appspot.com/o/images%2FJavaScriptLogo.png?alt=media&token=546b3a61-4d3a-445a-86b4-89aa728360df"
  );
  const [language, setLanguage] = React.useState<
    languageFromDatabase | frameWorkFromDatabase
  >({
    id: "",
    name: name,
    description: description,
    pictureUrl: pictureUrl,
  });
  const [picture, setPicture] = React.useState<File | null>(null);
  return (
    <Modal open={open} onClose={onClose}>
      <Typography variant={"h5"} color={"white"} fontFamily={"SourceSans"}>
        Create Language
      </Typography>
      <Stack flexDirection={"row"} alignItems={"center"}>
        <Stack>
          <EditableField
            title="Name"
            value={name}
            onChange={(text) => {
              setName(text);
              setLanguage({ ...language, name: text });
            }}
          />
          <EditableField
            title="Description"
            value={description}
            onChange={(text) => {
              setDescription(text);
              setLanguage({ ...language, description: text });
            }}
          />
        </Stack>
        <Stack gap={3}>
          <LanguageCard language={language} />
          <input
            onChange={(e) => {
              setPicture(e.target.files[0]);
              console.log();
              setPictureUrl(URL.createObjectURL(e.target.files[0]));
              console.log(URL.createObjectURL(e.target.files[0]));
              setLanguage({
                ...language,
                pictureUrl: URL.createObjectURL(e.target.files[0]),
              });
            }}
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button variant="contained" color="info" component="span">
              Upload
            </Button>
          </label>
        </Stack>
      </Stack>
      <Button
        onClick={() => {
          onCreate(language, picture, pictureUrl);
        }}
        variant="contained"
        color="info"
      >
        Create
      </Button>
    </Modal>
  );
}
