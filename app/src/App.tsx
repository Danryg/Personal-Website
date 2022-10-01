import "./App.css";
import { ContentContextProvider } from "./contexts/ContentContext";
import { ProjectsContextProvider } from "./contexts/ProjectsContext";
import RoutesConfig from "./RoutesConfig";

function App() {
  return (
    <ContentContextProvider>
      <ProjectsContextProvider>
        <RoutesConfig />
      </ProjectsContextProvider>
    </ContentContextProvider>
  );
}

export default App;
