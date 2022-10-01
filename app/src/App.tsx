import "./App.css";
import { ProjectsContextProvider } from "./contexts/ProjectsContext";
import RoutesConfig from "./RoutesConfig";

function App() {
  return (
    <ProjectsContextProvider>
      <RoutesConfig />
    </ProjectsContextProvider>
  );
}

export default App;
