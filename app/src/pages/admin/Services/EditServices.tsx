import { Button, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import EditableMultiline from "../../../components/admin/EditableMultiline";
import ContentContext from "../../../contexts/ContentContext";
import ServiceContext from "../../../contexts/ServiceContext";
import StorageContext from "../../../contexts/StorageContexte";
import styles from "../../../styles/Services.module.css";
import {
  languageFromDatabase,
  languageToDatabase,
} from "../../../utils/GlobalTypes";
import LanguageCard from "../../servicesPage/LanguageCard";
import CreateProjectModal from "../Projects/CreateProjectModal";
import CreateLanguageModal from "./CreateLanguageModal";

export default function EditServices() {
  const { serviceContent, updateServiceContent } = useContext(ContentContext);
  const [title, setTitle] = React.useState("");
  const [openCreateLanguageModal, setOpenCreateLanguageModal] = useState(false);
  const {
    createLanguage: create,
    languages,
    deleteLanguage,
    editLanguage,
  } = useContext(ServiceContext);

  const createLanguage = (
    language: languageToDatabase,
    file: File,
    url?: string
  ) => {
    create(language, file, url);
    setOpenCreateLanguageModal(false);
  };

  useEffect(() => {
    setTitle(serviceContent.title);
  }, [languages, serviceContent]);

  return (
    <>
      <Stack
        gap={5}
        width={"100vw"}
        min-height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"#181820"}
        flexDirection={"column"}
        flexWrap={"wrap"}
        paddingBottom={10}
      >
        <EditableMultiline
          title="Title"
          value={title}
          onChange={(text) => {
            setTitle(text);
          }}
        />
        <Stack
          className={styles.languageCards}
          direction={"row"}
          gap={2}
          flexWrap={"wrap"}
        >
          {languages.map((language) => (
            <LanguageCard
              language={language}
              hover
              onDelete={(lang: languageFromDatabase) => deleteLanguage(lang)}
              key={language.id}
            />
          ))}
        </Stack>
        <Button
          onClick={() => {
            setOpenCreateLanguageModal(true);
            console.log(openCreateLanguageModal);
          }}
        >
          Add language
        </Button>
      </Stack>
      <CreateLanguageModal
        open={openCreateLanguageModal}
        onClose={() => setOpenCreateLanguageModal(false)}
        onCreate={(language: languageToDatabase, file: File, url?: string) => {
          createLanguage(language, file, url);
        }}
      />
    </>
  );
}
