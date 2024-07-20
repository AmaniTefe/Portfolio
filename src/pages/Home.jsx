import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";

import Navbar from "../components/navBar";
const Home = () => {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box sx={{ display: "flex", mt: 10 }}>
        <Typography>hello world</Typography>
      </Box>
    </Box>
  );
};
export default Home;
