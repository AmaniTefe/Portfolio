import { Box, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import CopyrightIcon from "@mui/icons-material/Copyright";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  return (
    <Box
      id="Contacts"
      sx={{
        textAlign: "center",
        color: "#ffffff",
        padding: 5,
        background: "#E5E4E2",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontFamily: "Lobster", fontWeight: "bold" }}
          color="black"
          component="h1"
        >
          INTERESTED IN WORKING
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontFamily: "Lobster", fontWeight: "bold" }}
          color="#177BD1"
          component="h1"
        >
          WITH ME?
        </Typography>
        <Button
          size="large"
          endIcon={<EmailIcon />}
          component="a"
          href="mailto:s.tefera.amanuel@gmail.com"
        >
          Get in Touch
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box sx={{ mt: 3, textAlign: "start", ml: "10%" }}>
          <Typography
            sx={{
              fontFamily: "Sora, sans-serif",
              fontWeight: "bold",
              textAlig: "center",
              ml: "10%",
            }}
            color="black"
            variant="h3"
            component="h1"
            target="_blank"
          >
            CONTACT
          </Typography>
          <Typography
            sx={{ fontFamily: "Sora, sans-serif", fontWeight: "bold" }}
            color="black"
            variant="body2"
            component="h1"
          >
            Name:{" "}
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
              Amanuel Tefera Seifu
            </Typography>
          </Typography>
          <Typography
            sx={{ fontFamily: "Sora, sans-serif", fontWeight: "bold" }}
            color="black"
            variant="body2"
            component="h1"
          >
            Tele:{" "}
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
              +25194-554-63-73
            </Typography>
          </Typography>

          <Typography
            sx={{ fontFamily: "Sora, sans-serif", fontWeight: "bold" }}
            color="black"
            variant="body2"
            component="h1"
          >
            Email:{" "}
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Sora, sans-serif",
                fontSize: "inherit",
                color: "#177BD1",
                textAlign: "center",
                fontWeight: "bold",
              }}
              component="a"
              href="mailto:s.tefera.amanuel@gmail.com"
              target="_blank"
            >
              s.tefera.amanuel@gmail.com
            </Typography>
          </Typography>
          <Typography
            sx={{ fontFamily: "Sora, sans-serif", fontWeight: "bold" }}
            color="black"
            variant="body2"
            component="h1"
          >
            Address:{" "}
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
              Addis Ababa, Ethiopia
            </Typography>
          </Typography>
        </Box>
        <Box sx={{ mt: 2, mr: "10%" }}>
          <Stack
            direction="row"
            justifyContent="right"
            spacing={1}
            useFlexGap
            sx={{
              color: "text.secondary",
            }}
          >
            <IconButton
              color="inherit"
              href="https://github.com/AmaniTefe"
              aria-label="GitHub"
              sx={{ alignSelf: "center" }}
              target="_blank"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://x.com/dev_amanijs"
              aria-label="X"
              sx={{ alignSelf: "center" }}
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/amanuel-teferais/"
              aria-label="LinkedIn"
              sx={{ alignSelf: "center" }}
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.instagram.com/amani.tefera"
              aria-label="LinkedIn"
              sx={{ alignSelf: "center" }}
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
          </Stack>
          <Box sx={{ display: "flex", ml: 1.3 }}>
            <CopyrightIcon sx={{ color: "gray" }} />
            <Typography
              sx={{
                fontFamily: "Sora, sans-serif",
                fontSize: "inherit",
                color: "gray",
                textAlign: "center",
                fontWeight: "light",
                ml: 0.2,
              }}
            >
              Portfolio, 2024
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
