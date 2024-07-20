import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import me from "../Utils/me.jpg";

const HeroSection = () => {
  return (
    <Box
      id="hero"
      sx={{
        paddingY: 24,
        textAlign: "center",
        color: "#ffffff",
        background: "linear-gradient(to right, white 71%, #177BD1 29%)",
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
              ml: "24%",
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
              marginBottom: 4,
              color: "gray",
              textAlign: "left",
              ml: "24%",
            }}
          >
            I'm a Full Stack Developer who loves turning complex problems into
            smooth, user-friendly solutions. Passionate about both the design
            and code, I'm all about creating amazing web experiences that make
            life a little easier and a lot more fun.
          </Typography>
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
