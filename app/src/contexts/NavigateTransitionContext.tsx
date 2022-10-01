import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/transitions/PageTransition";

const NavigateTransitionContext = createContext(undefined);

export function NavigateTransitionContextProvider({ children }) {
  const [activateTransition, setActivateTransition] = useState(false);
  const [navigationPath, setNavigationPath] = useState("");

  const navigate = useNavigate();

  const navigateWithTransition = (path: string) => {
    setNavigationPath(path);
    setActivateTransition(!activateTransition);
  };

  const values = { navigateWithTransition };
  return (
    <NavigateTransitionContext.Provider value={values}>
      {children}

      <PageTransition
        activate={activateTransition}
        onEnter={() => {
          navigate(navigationPath);
        }}
      />
    </NavigateTransitionContext.Provider>
  );
}

export default NavigateTransitionContext;
