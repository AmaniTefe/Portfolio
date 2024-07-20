import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/navBar";
import HeroSection from "./components/Hero";
import Skill from "./components/About";

function App() {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <Skill />
    </Box>
  );
}

export default App;
