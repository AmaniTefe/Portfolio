import { Box, Typography, Button, IconButton, Stack } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        textAlign: "center",
        padding: 5,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column" },
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Lobster",
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            color: "white",
          }}
          component="h1"
        >
          INTERESTED IN WORKING WITH ME?
        </Typography>
        <Button
          size="large"
          endIcon={<EmailIcon />}
          component="a"
          href="mailto:s.tefera.amanuel@gmail.com"
          sx={{ mt: { xs: 2, sm: 0 }, color: "#177BD1" }}
        >
          Get in Touch
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
          mt: 5,
          pt: 3,
        }}
      >
        <Box
          sx={{
            textAlign: { xs: "center", md: "start" },
            mb: { xs: 3, md: 0 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Sora, sans-serif",
              fontWeight: "bold",
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
              color: "white",
            }}
            component="h2"
          >
            CONTACT
          </Typography>
          <p className="text-lg font-bold text-designColor">
            Name:{" "}
            <span className="font-medium text-white ">Amanuel Tefera</span>
          </p>
          <p className="text-lg font-bold text-designColor">
            Tele:{" "}
            <span className="font-medium text-white ">+2519-45-54-6373</span>
          </p>
          <p className="text-lg font-bold text-designColor">
            Email:{" "}
            <a
              className="font-medium text-white "
              component="a"
              href="mailto:s.tefera.amanuel@gmail.com"
            >
              s.tefera.amanuel@gmail.com
            </a>
          </p>
          <p className="text-lg font-bold text-designColor">
            Address:{" "}
            <span className="font-medium text-white ">
              Addis Ababa, Ethiopia
            </span>
          </p>
        </Box>
        <Box>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={1}
            sx={{
              color: "text.secondary",
            }}
          >
            <IconButton
              className="hover:text-designColor hover:-translate-y-1"
              color="inherit"
              href="https://github.com/AmaniTefe"
              aria-label="GitHub"
              sx={{ color: "white" }}
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              className="hover:text-designColor hover:-translate-y-1"
              color="inherit"
              href="https://x.com/dev_amanijs"
              aria-label="Twitter"
              sx={{ color: "white" }}
              target="_blank"
            >
              <FaXTwitter />
            </IconButton>
            <IconButton
              className="hover:text-designColor hover:-translate-y-1"
              color="inherit"
              href="https://www.linkedin.com/in/amanuel-tefera"
              aria-label="LinkedIn"
              sx={{ color: "white" }}
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              className="hover:text-designColor hover:-translate-y-1"
              color="inherit"
              href="https://www.instagram.com/amani.tefera"
              aria-label="Instagram"
              sx={{ color: "white" }}
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
