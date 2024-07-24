import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import me from "../../Utils/me.jpg";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";

const HeroSection = () => {
  return (
    <Box
      id="hero"
      sx={{
        paddingY: 24,
        textAlign: "center",
        color: "#ffffff",
        background: "linear-gradient(45deg, white 71%, #177BD1 29%)",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              marginBottom: 2,
              color: "black",
              textAlign: "left",
              ml: "21%",
            }}
          >
            Hi! I am{" "}
            <Typography
              component="span"
              sx={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: "inherit",
                color: "#177BD1",
                textAlign: "center",
              }}
            >
              Amanuel Tefera
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{
              color: "gray",
              textAlign: "left",
              ml: "21%",
            }}
          >
            I'm a Full Stack Developer who loves turning complex problems into
            smooth, user-friendly solutions. Passionate about both the design
            and code, I'm all about creating amazing web experiences that make
            life a little easier and a lot more fun.
          </Typography>
          <Box sx={{ mt: 2, mr: "10%" }}>
            <Stack
              direction="row"
              justifyContent="left"
              spacing={1}
              useFlexGap
              sx={{
                color: "text.secondary",
                ml: "22%",
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
              <IconButton
                color="inherit"
                href="mailto:s.tefera.amanuel@gmail.com"
                aria-label="LinkedIn"
                sx={{ alignSelf: "center" }}
                target="_blank"
              >
                <EmailIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://t.me/kellyness"
                aria-label="LinkedIn"
                sx={{ alignSelf: "center" }}
                target="_blank"
              >
                <TelegramIcon />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: "15%",
            }}
          >
            <img
              src={me}
              alt="Amanuel Tefera"
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
