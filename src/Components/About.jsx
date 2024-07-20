import { Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import me from "../Utils/me.jpg";
import react from "../Utils/react.png";
import html from "../Utils/html.png";
import javascrip from "../Utils/javascript.png";
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
  }));
  return (
    <Box
      id="skill"
      sx={{
        textAlign: "center",
        color: "#ffffff",
        padding: 5,
        background: "linear-gradient(to left,white 71%,#177BD1 29%)",
      }}
    >
      <Typography
        sx={{ fontFamily: "Sora, sans-serif" }}
        color="black"
        variant="h3"
      >
        Programming Skills
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Stack direction="row" spacing={2}>
          <DemoPaper variant="elevation">
            <img src={html} alt="html" />
          </DemoPaper>
          <DemoPaper variant="elevation">
            <img src={css} alt="css" />
          </DemoPaper>
          <DemoPaper variant="elevation">
            <img src={javascrip} alt="javascrip" />
          </DemoPaper>
          <DemoPaper color="black" variant="elevation">
            <img src={react} alt="react" />
          </DemoPaper>
          <DemoPaper variant="elevation">
            <img src={php} alt="php" />
          </DemoPaper>
          <DemoPaper variant="elevation">
            <img src={nodejs} alt="nodejs" />
          </DemoPaper>
          <DemoPaper variant="elevation">
            <img src={sql} alt="sql" />
          </DemoPaper>
          <DemoPaper variant="elevation">
            <img src={mongo} alt="mongo" />
          </DemoPaper>
          <DemoPaper variant="elevation">
            <img src={python} alt="python" />
          </DemoPaper>
        </Stack>{" "}
      </Box>
    </Box>
  );
};
export default Skill;
