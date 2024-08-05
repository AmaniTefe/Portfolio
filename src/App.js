import React from "react";
import Navbar from "./components/NavBar/navBar.jsx";
import Banner from "./components/Hero/Hero.jsx";
import Skill from "./components/skill/skill.jsx";
import Project from "./components/Projects/projects.jsx";
import Contact from "./components/Contacts/contact.jsx";
import Favicon from "react-favicon";
import { useState } from "react";
import icon from "./Utils/favicon.png";
import Resume from "./components/resume/resume.jsx";
function App() {
  const [faviconUrl, setFaviconUrl] = useState(`${icon}`);

  const toggleFavicon = () => {
    setFaviconUrl((prevUrl) => (prevUrl === `${icon}` ? `${icon}` : `${icon}`));
  };

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Favicon url={faviconUrl} />
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Skill />
        <Project />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
