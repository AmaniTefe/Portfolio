import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/NavBar/navBar.jsx";
import HeroSection from "./components/Hero/Hero.jsx";
import Skill from "./components/skill/skill.jsx";
import Project from "./components/Projects/projects.jsx";
import Contact from "./components/Contacts/contact.jsx";
import Favicon from "react-favicon";
import { useState } from "react";
import icon from "./Utils/favicon.png";
function App() {
  const [faviconUrl, setFaviconUrl] = useState(`${icon}`);

  const toggleFavicon = () => {
    setFaviconUrl((prevUrl) => (prevUrl === `${icon}` ? `${icon}` : `${icon}`));
  };

  return (
    <Box>
      <Favicon url={faviconUrl} />
      <Navbar />
      <HeroSection />
      <Skill />
      <Project />
      <Contact />
    </Box>
  );
}

export default App;
