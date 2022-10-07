import React, { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import NavigateTransitionContext, {
  NavigateTransitionContextProvider,
} from "./contexts/NavigateTransitionContext";
import LoginAdmin from "./pages/admin/LoginAdmin";
import { Home } from "./pages/homepage/Home";
import Projects from "./pages/projectsPage/Projects";
import Resume from "./pages/Resume";
import ServicesPage from "./pages/servicesPage/ServicesPage";

export default function RoutesConfig() {
  return (
    <>
      <NavigateTransitionContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/adminlogin" element={<LoginAdmin />} />
        </Routes>
      </NavigateTransitionContextProvider>
    </>
  );
}
