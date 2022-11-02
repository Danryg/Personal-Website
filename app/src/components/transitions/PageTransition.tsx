import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box, Slide } from "@mui/material";
import React, { useEffect } from "react";

interface IPageTransitionProps {
  onEnter?: () => void;
  onExit?: () => void;
  activate: boolean;
}
export default function PageTransition({
  onEnter = () => {},
  onExit = () => {},
  activate,
}: IPageTransitionProps) {
  const [transitioning, setTransitioning] = React.useState(false);
  const [enter, setEnter] = React.useState(false);

  const startTransition = () => {
    setEnter(true);
    setTransitioning(true);
  };

  const entered = () => {
    onEnter();
    setEnter(false);
  };
  const exited = () => {
    onExit();
    setTransitioning(false);
  };

  useEffect(() => {
    startTransition();
  }, [activate]);

  const color = "#181820";

  useEffect(() => {});

  var rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const getSlider = (i: number): ReactJSXElement => {
    return (
      <Slide in={enter} direction="right" timeout={450 + 50 * i} key={i}>
        <Box bgcolor={color} height="10vh" />
      </Slide>
    );
  };

  return (
    <>
      {transitioning ? (
        <Box position="absolute" left={0} top={0} width="100vw" zIndex={10}>
          {rows.map((i) => getSlider(i))}
          <Slide
            in={enter}
            direction="right"
            timeout={400 + 100 * 10}
            onEntered={() => entered()}
            onExited={() => exited()}
          >
            <Box bgcolor={color} height="10vh" />
          </Slide>
        </Box>
      ) : null}
    </>
  );
}
