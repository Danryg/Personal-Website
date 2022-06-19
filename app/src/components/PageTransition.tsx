import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box, Slide } from "@mui/material";
import React, { useEffect } from "react";

interface IPageTransitionProps {
  exitHandler?: Function;
  enter: boolean;
}
export default function PageTransition({
  exitHandler = () => {},
  enter,
}: IPageTransitionProps) {
  const [done, setDone] = React.useState(false);

  const color = "black";

  useEffect(() => {});

  var rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const getSlider = (i: number): ReactJSXElement => {
    return (
      <Slide in={enter} direction="right" timeout={500 + 100 * i} key={i}>
        <Box bgcolor={color} height="10vh" />
      </Slide>
    );
  };

  return (
    <Box
      position="absolute"
      left={0}
      top={0}
      width="100vw"
      sx={{ display: enter ? "block" : "none" }}
    >
      {rows.map((i) => getSlider(i))}
      <Slide
        mountOnEnter
        unmountOnExit
        in={enter}
        direction="right"
        timeout={500 + 100 * 10}
        onEntered={() => exitHandler()}
      >
        <Box bgcolor={color} height="10vh" />
      </Slide>
    </Box>
  );
}
