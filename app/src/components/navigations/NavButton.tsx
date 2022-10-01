import { Button } from "@mui/material";
import React from "react";

interface props {
  title: string;
  onClick: () => void;
}
export default function NavButton({ title, onClick }: props) {
  return (
    <Button
      style={{
        color: "white",
        textTransform: "none",
        fontWeight: 700,
        zIndex: 5,
      }}
      onClick={() => {
        onClick();
      }}
    >
      {title}
    </Button>
  );
}
