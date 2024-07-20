import React from "react";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import react from "../Utils/react.png";
import html from "../Utils/html.png";
import javascript from "../Utils/javascript.png";
import css from "../Utils/css.png";
import nodejs from "../Utils/nodejs.png";
import mongo from "../Utils/mongo.png";
import sql from "../Utils/sql.png";
import python from "../Utils/python.png";
import php from "../Utils/php.png";

const Skill = () => {
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 200,
    height: 200,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
    alignContent: "center",
    display: "inline-block",
    margin: theme.spacing(1.5),
  }));

  const skills = [
    html,
    css,
    javascript,
    react,
    php,
    nodejs,
    sql,
    mongo,
    python,
  ];

  const duplicates = 30;
  const extendedSkills = Array(duplicates).fill(skills).flat();

  return (
    <Box
      id="skill"
      sx={{
        textAlign: "center",
        color: "#ffffff",
        padding: 5,
        background: "linear-gradient(to left,white 71%,#177BD1 29%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Typography
        sx={{ fontFamily: "Sora, sans-serif", fontWeight: "bold" }}
        color="black"
        variant="h3"
        component="h1"
      >
        PROGRAMMING{" "}
        <Typography
          variant="h3"
          component="span"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontSize: "inherit",
            color: "#177BD1",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          SKILLS
        </Typography>
      </Typography>
      <Box
        sx={{
          mt: 3,
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            animation: "scroll 350s linear infinite",
          }}
        >
          {extendedSkills.map((skill, index) => (
            <DemoPaper key={index} variant="elevation">
              <img
                src={skill}
                alt={`skill-${index}`}
                style={{ width: "100%", height: "100%" }}
              />
            </DemoPaper>
          ))}
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(to right, #177BD1 0%, rgba(255,255,255,0) 10%, rgba(255,255,255,0) 90%, white 100%)",
          }}
        />
      </Box>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } // Adjust to cover half of the extended content
          }
        `}
      </style>
    </Box>
  );
};

export default Skill;
