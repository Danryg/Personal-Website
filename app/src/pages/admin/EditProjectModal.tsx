import { Typography, Button, Checkbox } from "@mui/material";
import React from "react";
import EditableField from "../../components/admin/EditableField";
import EditableMultiline from "../../components/admin/EditableMultiline";
import Modal from "../../components/Modal";
import { ProjectFromDatabase } from "../../utils/GlobalTypes";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ProjectModal from "../projectsPage/ProjectModal";
interface props {
  open: boolean;
  onClose: () => void;
  project: ProjectFromDatabase;
  updateProject: (project: ProjectFromDatabase) => void;
}

export default function EditProjectModal({
  open,
  onClose,
  project,
  updateProject,
}: props) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [pinned, setPinned] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(project);
  const [preOpen, setPreOpen] = React.useState(false);

  React.useEffect(() => {
    setTitle(project.title);
    setDescription(project.description);
    setPinned(project.pinned);
  }, [project]);

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
            setSelectedProject({ ...project, title, description, pinned });
            setPreOpen(true);
          }}
          variant="contained"
          color="info"
        >
          <RemoveRedEyeIcon />
        </Button>
        <EditableField
          title="Title"
          value={title}
          onChange={(text) => setTitle(text)}
          edited={title !== project?.title}
          onReset={() => setTitle(project?.title)}
        />
        <EditableMultiline
          title="Description"
          value={description}
          onChange={(text) => {
            setDescription(text);
          }}
          edited={description !== project?.description}
          onReset={() => setDescription(project?.description)}
        />
        <Checkbox
          checked={pinned}
          sx={{ width: 100 }}
          onChange={() => {
            setPinned(!pinned);
          }}
          inputProps={{ "aria-label": "controlled" }}
        />

        <input
          onChange={(e) => {
            console.log(e.target.files);
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
      </Modal>
      <ProjectModal
        open={preOpen}
        onClose={() => setPreOpen(false)}
        project={selectedProject}
      />
    </>
  );
}
