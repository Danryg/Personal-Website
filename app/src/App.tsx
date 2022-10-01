import "./App.css";
import { ContentContextProvider } from "./contexts/ContentContext";
import { ProjectsContextProvider } from "./contexts/ProjectsContext";
import RoutesConfig from "./RoutesConfig";
import { createTheme, ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#ffffff",
      darker: "#ffffff",
    },
    neutral: {
      main: "#ffffff",
      contrastText: "#fff",
    },
    info: {
      main: "#ffffff",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContentContextProvider>
        <ProjectsContextProvider>
          <RoutesConfig />
        </ProjectsContextProvider>
      </ContentContextProvider>
    </ThemeProvider>
  );
}

export default App;
