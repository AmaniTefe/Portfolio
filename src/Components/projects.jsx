import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Backup from "../Utils/backup.jpg";
import Sentimental from "../Utils/sentimental.jpg";
import fase_recognition from "../Utils/facial_recognition.jpg";
import cims from "../Utils/cims.jpg";
const Project = () => {
  return (
    <Box
      id="projects"
      sx={{
        textAlign: "center",
        color: "#ffffff",
        padding: 5,
        background: "linear-gradient(to right, white 71%, #177BD1 29%)",
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
        PROJECTS{" "}
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
          DONE
        </Typography>
      </Typography>
      <Box gap={3} sx={{ display: "flex", mt: 3 }}>
        <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}>
          <CardMedia
            sx={{ height: 170 }}
            image={Sentimental}
            title="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ fontFamily: "Sora, sans-serif" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Sentimental Analysis using twitter dataset
            </Typography>
            <Typography
              sx={{ fontFamily: "Sora, sans-serif", textAlign: "left" }}
              variant="body2"
              color="gray"
            >
              Trains and Analyzes the dataset then ditermines whether the tweets
              are Positive, Negative or Neutral. Built using python and python
              libraries like numpy, nltk, wordcloud and many more.
            </Typography>
          </CardContent>
          <CardActions sx={{ marginTop: "auto" }}>
            <Button
              sx={{ alignItems: "end" }}
              size="small"
              href="https://github.com/AmaniTefe/Sentimental-Analysis-using-Twitter-dataset"
              target="_blank"
            >
              GIT Repo
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}>
          <CardMedia sx={{ height: 170 }} image={cims} title="green iguana" />
          <CardContent>
            <Typography
              sx={{ fontFamily: "Sora, sans-serif" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Web Based Court Information Management System
            </Typography>
            <Typography
              sx={{ fontFamily: "Sora, sans-serif", textAlign: "left" }}
              variant="body2"
              color="gray"
            >
              A modern Web based solution for the paper based court information
              management system. built using REACT and MUI for the front end,
              NodeJs and Express for the backend and SQL for the database.
            </Typography>
          </CardContent>
          <CardActions sx={{ marginTop: "auto" }}>
            <Button
              sx={{ alignItems: "end" }}
              size="small"
              href="https://github.com/AmaniTefe/CIMS"
              target="_blank"
            >
              GIT Repo
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}>
          <CardMedia sx={{ height: 170 }} image={Backup} title="Backup" />
          <CardContent>
            <Typography
              sx={{ fontFamily: "Sora, sans-serif" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Executable Script for Automated MySQL Database Backups
            </Typography>
            <Typography
              sx={{ fontFamily: "Sora, sans-serif", textAlign: "left" }}
              variant="body2"
              color="gray"
            >
              A batch file that automates the process of creating differential
              backups for a MySQL database, ensuring only changes since the last
              full backup are saved, providing efficient and secure data
              protection.
            </Typography>
          </CardContent>
          <CardActions sx={{ marginTop: "auto" }}>
            <Button
              sx={{ alignItems: "end" }}
              size="small"
              href="https://github.com/AmaniTefe/Executable-Script-for-Automated-MySQL-Database-Backups"
              target="_blank"
            >
              GIT Repo
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}>
          <CardMedia
            sx={{ height: 170 }}
            image={fase_recognition}
            title="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ fontFamily: "Sora, sans-serif" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Face Recognition System
            </Typography>
            <Typography
              sx={{ fontFamily: "Sora, sans-serif", textAlign: "left" }}
              variant="body2"
              color="gray"
            >
              A face recognition system that accurately identifies individuals
              using the available camera, after being trained with photos of the
              subjects along with their names. Built using python and python
              libraries like cv2 and re.
            </Typography>
          </CardContent>
          <CardActions sx={{ marginTop: "auto" }}>
            <Button
              sx={{ alignItems: "end" }}
              size="small"
              href="https://github.com/AmaniTefe/Real-Time-Face-Recognition-System"
              target="_blank"
            >
              GIT Repo
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};
export default Project;
