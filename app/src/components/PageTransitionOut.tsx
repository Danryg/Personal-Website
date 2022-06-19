import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box, Slide } from "@mui/material";
import React from "react";
import { JsxElement } from "typescript";

interface IPageTransitionOutProps {
  exitHandler?: Function;
  enter: boolean;
}

export default function PageTransitionOut({
  exitHandler = () => {},
  enter,
}: IPageTransitionOutProps) {
  const [loading, setLoading] = React.useState<boolean>(true);
  const color = "black";

  var rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const getSlider = (i: number): ReactJSXElement => {
    return (
      <Slide
        appear={false}
        enter={false}
        direction="right"
        timeout={500 + 100 * i}
        key={i}
        exit
        in={enter}
      >
        <Box bgcolor={color} height="10vh" />
      </Slide>
    );
  };

  return (
    <Box position="absolute" left={0} top={0} width="100vw">
      {rows.map((i) => getSlider(i))}
      <Slide
        appear={false}
        enter={false}
        direction="right"
        timeout={500 + 100 * 10}
        exit
        in={enter}
        onEntered={() => {
          exitHandler();
        }}
      >
        <Box bgcolor={color} height="10vh" />
      </Slide>
    </Box>
  );
}
