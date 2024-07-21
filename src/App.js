import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/navBar";
import HeroSection from "./components/Hero";
import Skill from "./components/skill";
import Project from "./components/projects";
import Contact from "./components/contact";
function App() {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <Skill />
      <Project />
      <Contact />
    </Box>
  );
}

export default App;
