import {
  Button,
  ButtonGroup,
  Checkbox,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import ProjectsContext from "../../contexts/ProjectsContext";
import styles from "../../styles/Admin.module.css";
import { ProjectFromDatabase } from "../../utils/GlobalTypes";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ProjectModal from "../projectsPage/ProjectModal";
import Modal from "../../components/Modal";
import EditableField from "../../components/admin/EditableField";
import EditableMultiline from "../../components/admin/EditableMultiline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditProjectModal from "./EditProjectModal";
import CreateProjectModal from "./CreateProjectModal";
import StorageContext from "../../contexts/StorageContexte";
export default function EditProjects() {
  const {
    projects,
    updateProject,
    createProject: create,
  } = React.useContext(ProjectsContext);
  const [compareProject, setCompareProject] =
    React.useState<ProjectFromDatabase | null>(null);
  const [editingProject, setEditingProject] =
    React.useState<ProjectFromDatabase | null>(null);
  const [selectedProject, setSelectedProject] =
    React.useState<ProjectFromDatabase | null>(null);
  const [open, setOpen] = React.useState(false);
  const [editingOpen, setEditingOpen] = React.useState(false);
  const [createOpen, setCreateOpen] = React.useState(false);
  const { uploadImage } = useContext(StorageContext);
  const deleteProject = (project: ProjectFromDatabase) => {
    console.log("delete project", project.id);
  };
  useEffect(() => {
    console.log(projects);
  }, [projects]);

  const createProject = (project: ProjectFromDatabase, file: File) => {
    /* uploadImage(file, project.title).then((url) => {
      console.log("url", url);
    }); */
    create(project);
  };

  return (
    <Stack
      gap={5}
      width={"100vw"}
      min-height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"#181820"}
      flexDirection={"column"}
      flexWrap={"wrap"}
      paddingBottom={10}
    >
      {projects?.map((project) => (
        <SmallProjectCard
          project={project}
          key={project.title}
          editProject={(project: ProjectFromDatabase) => {
            setCompareProject(project);
            setEditingProject(project);
            setEditingOpen(true);
          }}
          deleteProject={(project: ProjectFromDatabase) =>
            deleteProject(project)
          }
          showProject={(project: ProjectFromDatabase) => {
            setSelectedProject(project);
            setOpen(true);
          }}
        />
      ))}

      <Button onClick={() => setCreateOpen(true)}>Create Project</Button>
      {editingProject && (
        <EditProjectModal
          project={editingProject}
          open={editingOpen}
          onClose={() => setEditingOpen(false)}
          updateProject={(project: ProjectFromDatabase) => {
            setEditingOpen(false);
          }}
        />
      )}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          open={selectedProject && open}
          onClose={() => {
            setOpen(false);
          }}
        />
      )}
      <CreateProjectModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        createProject={(project: ProjectFromDatabase, file: File) => {
          createProject(project, file);
          setCreateOpen(false);
        }}
      />
    </Stack>
  );
}

interface SmallProjectCardProps {
  project: ProjectFromDatabase;
  editProject: (project: ProjectFromDatabase) => void;
  deleteProject: (project: ProjectFromDatabase) => void;
  showProject: (project: ProjectFromDatabase) => void;
}
function SmallProjectCard({
  project,
  editProject,
  showProject,
  deleteProject,
}: SmallProjectCardProps) {
  return (
    <Stack
      direction={"row"}
      border={"2px solid white"}
      borderRadius={1}
      width={400}
      height={50}
      justifyContent={"center"}
      alignItems={"center"}
      gap={5}
    >
      <Typography color={"white"}>{project.title}</Typography>
      <ButtonGroup>
        <Button onClick={() => editProject(project)} variant="contained">
          <EditIcon />
        </Button>
        <Button
          onClick={() => deleteProject(project)}
          variant="contained"
          color="error"
        >
          <DeleteOutlineIcon />
        </Button>
        <Button
          onClick={() => showProject(project)}
          variant="contained"
          color="info"
        >
          <RemoveRedEyeIcon />
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
