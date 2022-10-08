import { Typography, Button, Checkbox, Box, Stack } from "@mui/material";
import React, { useContext } from "react";
import EditableField from "../../../components/admin/EditableField";
import EditableMultiline from "../../../components/admin/EditableMultiline";
import Modal from "../../../components/Modal";
import { ProjectFromDatabase } from "../../../utils/GlobalTypes";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ProjectModal from "../../projectsPage/ProjectModal";
import StorageContext from "../../../contexts/StorageContexte";
import { ProjectCard } from "../../projectsPage/ProjectCard";
interface props {
  open: boolean;
  onClose: () => void;

  createProject: (project: ProjectFromDatabase, file: File) => void;
}
export default function CreateProjectModal({
  open,
  onClose,

  createProject,
}: props) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [pinned, setPinned] = React.useState(false);
  const [contributors, setContributors] = React.useState<string[]>([]);
  const [gitLink, setGitLink] = React.useState("");
  const [pictureUrl, setPictureUrl] = React.useState<string | undefined>(
    undefined
  );
  const [picture, setPicture] = React.useState<File | undefined>(undefined);

  const [selectedProject, setSelectedProject] = React.useState({
    id: "",
    title,
    description,
    pinned,
    pictures: [],
    contributors,
    date: new Date(),
    gitLink,
    pictureUrl,
  });
  const [preOpen, setPreOpen] = React.useState(false);

  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          onClose();
        }}
      >
        <Typography variant={"h5"} color={"white"} fontFamily={"SourceSans"}>
          Edit Project
        </Typography>
        <Button
          onClick={() => {
            setSelectedProject({
              ...selectedProject,
              title,
              description,
              pinned,
              contributors,
              gitLink,
              pictureUrl,
            });
            setPreOpen(true);
          }}
          variant="contained"
          color="info"
        >
          <RemoveRedEyeIcon />
        </Button>
        <Stack direction={"column"} alignItems={"center"} gap={3}>
          <Stack direction={"row"} alignItems={"center"} gap={3}>
            <EditableField
              title="Title"
              value={title}
              onChange={(text) => {
                setTitle(text);
                setSelectedProject({
                  ...selectedProject,
                  title,
                });
              }}
            />

            <EditableMultiline
              title="Description"
              value={description}
              onChange={(text) => {
                setDescription(text);
                setSelectedProject({
                  ...selectedProject,

                  description,
                });
              }}
            />
          </Stack>
          <Checkbox
            checked={pinned}
            sx={{ width: 100 }}
            onChange={() => {
              setPinned(!pinned);
              setSelectedProject({
                ...selectedProject,

                pinned,
              });
            }}
            inputProps={{ "aria-label": "controlled" }}
          />
          <Stack
            width={"100%"}
            alignItems={"center"}
            border={"2px dotted black"}
          >
            {picture && (
              <Box
                sx={{
                  width: 500,
                  height: 200,
                  borderRadius: 1,
                  backgroundImage: `url(${URL.createObjectURL(picture)})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
            <input
              onChange={(e) => {
                setPicture(e.target.files[0]);
                setPictureUrl(URL.createObjectURL(e.target.files[0]));
                setSelectedProject({
                  ...selectedProject,
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
              <Button variant="contained" component="span">
                Upload
              </Button>
            </label>
          </Stack>
          <ProjectCard
            project={selectedProject}
            onClick={() => {}}
            style={{ position: "fixed", left: "25px", top: "25px" }}
          />
          <Button
            onClick={() => {
              setSelectedProject({
                ...selectedProject,
                title,
                description,
                pinned,
                contributors,
                gitLink,
                pictureUrl,
              });
              createProject(selectedProject, picture);
            }}
          >
            Create
          </Button>
        </Stack>
      </Modal>

      <ProjectModal
        open={preOpen}
        onClose={() => setPreOpen(false)}
        project={selectedProject}
      />
    </>
  );
}
