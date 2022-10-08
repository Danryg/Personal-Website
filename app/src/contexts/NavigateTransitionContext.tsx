import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/transitions/PageTransition";

const NavigateTransitionContext = createContext(undefined);

export function NavigateTransitionContextProvider({ children }) {
  const [activateTransition, setActivateTransition] = useState(false);
  const [navigationPath, setNavigationPath] = useState(undefined);
  const [out, setOut] = useState(true);
  const [done, setDone] = useState<boolean>(true);

  const navigate = useNavigate();

  const navigateWithTransition = (path: string) => {
    setNavigationPath(path);
    setActivateTransition(!activateTransition);
  };

  const navigateOnlyInTransition = (path: string) => {
    setNavigationPath(path);
    setActivateTransition(true);
  };

  const values = { navigateWithTransition, navigateOnlyInTransition, done };
  return (
    <NavigateTransitionContext.Provider value={values}>
      {children}

      {navigationPath ? (
        <PageTransition
          activate={activateTransition}
          onEnter={() => {
            navigate(navigationPath);
            if (out) setDone(false);
            else {
              setDone(true);
              setNavigationPath(undefined);
            }
          }}
          onExit={() => {
            setDone(true);
          }}
        />
      ) : null}
    </NavigateTransitionContext.Provider>
  );
}

export default NavigateTransitionContext;
