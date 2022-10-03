import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { firebaseAuth } from "../../config/FirebaseConfig";
import ContentContext from "../../contexts/ContentContext";
import EditableField from "../../components/admin/EditableField";
import EditableMultiline from "../../components/admin/EditableMultiline";
import { firestore } from "../../config/FirebaseConfig";
import { doc } from "firebase/firestore";
export default function EditHome() {
  const [name, setName] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [workDesc, setWorkDesc] = React.useState("");
  const [projDesc, setProjDesc] = React.useState("");
  const [serDesc, setSerDesc] = React.useState("");
  const { homeContent, updateHomeContent } = React.useContext(ContentContext);
  const [reference, setReference] = React.useState<any>(null);

  useEffect(() => {
    if (homeContent) {
      setWorkDesc(homeContent.work);
      setTitle(homeContent.title);
      setDesc(homeContent.desc);
      setOccupation(homeContent.occupation);
      setProjDesc(homeContent.projects);
      setSerDesc(homeContent.services);
      setName(homeContent.name);
    }
    const ref = doc(firestore, "content", "home");
    if (ref) {
      setReference(ref);
    }
  }, [homeContent]);
  return (
    <Stack
      gap={5}
      width={"100vw"}
      min-height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      bgcolor={"#181820"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      paddingBottom={10}
    >
      <EditableField
        value={name}
        onChange={(text) => setName(text)}
        edited={name !== homeContent?.name}
        onSave={async () => {
          if (reference) {
            await updateHomeContent({
              name: name,
            });
          }
        }}
        onReset={() => setName(homeContent?.name || "")}
        title={"Name"}
      />
      <EditableField
        value={title}
        onChange={(text) => setTitle(text)}
        edited={title !== homeContent?.title}
        onSave={async () => {
          if (reference) {
            await updateHomeContent({
              title: title,
            });
          }
        }}
        onReset={() => setTitle(homeContent?.title || "")}
        title={"Title"}
      />
      <EditableMultiline
        value={desc}
        onChange={(text) => setDesc(text)}
        edited={desc !== homeContent?.desc}
        onSave={async () => {
          if (reference) {
            await updateHomeContent({
              desc: desc,
            });
          }
        }}
        onReset={() => setDesc(homeContent?.desc || "")}
        title={"Description"}
      />

      <EditableMultiline
        value={occupation}
        onChange={(text) => setOccupation(text)}
        edited={occupation !== homeContent?.occupation}
        onSave={async () => {
          if (reference) {
            await updateHomeContent({
              occupation: occupation,
            });
          }
        }}
        onReset={() => setOccupation(homeContent?.occupation || "")}
        title={"Occupation"}
      />

      <EditableMultiline
        title={"Projects"}
        value={projDesc}
        onChange={(text) => setProjDesc(text)}
        edited={projDesc !== homeContent?.projects}
        onSave={async () => {
          if (reference) {
            await updateHomeContent({
              projects: projDesc,
            });
          }
        }}
        onReset={() => {
          setProjDesc(homeContent?.projects);
        }}
      />
      <EditableMultiline
        title={"Services"}
        value={serDesc}
        onChange={(text) => setSerDesc(text)}
        edited={serDesc !== homeContent?.services}
        onSave={async () => {
          if (reference) {
            await updateHomeContent({
              services: serDesc,
            });
          }
        }}
        onReset={() => {
          setSerDesc(homeContent?.services);
        }}
      />
      <EditableMultiline
        title={"Work"}
        value={workDesc}
        onChange={(text) => setWorkDesc(text)}
        edited={workDesc !== homeContent?.work}
        onSave={async () => {
          if (reference) {
            await updateHomeContent({
              work: workDesc,
            });
          }
        }}
        onReset={() => setWorkDesc(homeContent?.work || "")}
      />
    </Stack>
  );
}
