import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import avatar from "../Utils/me2.jpg";

const Navbar = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <IconButton
                variant="text"
                color="primary"
                aria-label="menu"
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                ml: "-18px",
                px: 0,
                textDecoration: "none",
              }}
            >
              <Link
                to="hero"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ ml: 2 }} alt="Remy Sharp" src={avatar} />
                <Typography
                  variant="body2"
                  component="h1"
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 200,
                    color: "gray",
                    marginLeft: "5px",
                  }}
                >
                  Amanuel Tefera
                </Typography>
              </Link>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <Link to="skill">
                <Button
                  color="primary"
                  variant="text"
                  size="small"
                  sx={{
                    color: "black",
                    fontWeight: "light",
                    fontFamily: "sora,sans-serif",
                  }}
                >
                  Skill
                </Button>
              </Link>
              <Link to="projects">
                <Button
                  color="primary"
                  variant="text"
                  size="small"
                  to="/category"
                  sx={{
                    color: "black",
                    fontWeight: "light",
                    fontFamily: "sora,sans-serif",
                  }}
                >
                  Projects
                </Button>
              </Link>
              <Link to="Contact">
                <Button
                  color="primary"
                  variant="text"
                  size="small"
                  to="/about"
                  sx={{
                    color: "black",
                    fontWeight: "light",
                    fontFamily: "sora,sans-serif",
                  }}
                >
                  Contact
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
