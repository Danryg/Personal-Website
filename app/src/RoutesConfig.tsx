import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
