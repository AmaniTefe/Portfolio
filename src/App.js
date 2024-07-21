import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/navBar.jsx";
import HeroSection from "./components/Hero.jsx";
import Skill from "./components/skill.jsx";
import Project from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
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
