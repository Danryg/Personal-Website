import { Button, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import EditableField from "../../../components/admin/EditableField";
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
  const [description, setDescription] = React.useState("");
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
    setDescription(serviceContent.description);
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
        <EditableField
          title="Title"
          value={title}
          onChange={(text) => {
            setTitle(text);
          }}
          onSave={() => {
            updateServiceContent({ title, description });
          }}
          edited={title !== serviceContent.title}
          onReset={() => setTitle(serviceContent.title)}
        />
        <EditableMultiline
          title="Description"
          value={description}
          onChange={(text) => {
            setDescription(text);
          }}
          onSave={() => {
            updateServiceContent({ title, description });
          }}
          edited={description !== serviceContent.description}
          onReset={() => setDescription(serviceContent.description)}
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
