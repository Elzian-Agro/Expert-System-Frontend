import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Image component
import Img from "../Img";
// images
import Screen1 from "../../../assets/images/Overall schedule1.png";
import Screen2 from "../../../assets/images/Overall schedule 2.png";

function OverallSchedule() {
  return (
    <>
      <Box>
        <Typography variant="h1" component="div" gutterBottom>
          Overall Schedule
        </Typography>
        <Typography variant="h3" gutterBottom>
          1.Navigate to Overall Schedule Page
        </Typography>
        <Typography variant="body2" gutterBottom>
          If you are log in you will automatically navigate to Dashboard. Then you can see the side
          navigation bar at the left corner of the page. Then you can see many options such as My
          schedule, Create schedule, Overall schedule, Experts, Contact-Us, Profile and About us.
          You can click Overall Schedule button and you will navigate to Overall Schedule page.
        </Typography>
        <br />

        <Img alt="screenshot of My Schedule user documentation" src={Screen1} />
        <br />
        <br />

        <Typography variant="h3" gutterBottom>
          2.Use Overall Schedule Page
        </Typography>
        <Typography variant="body2" gutterBottom>
          You can see many schedule cards here. If you book the schedule it will appear in My
          Schedule page and that will disappear in Overall Schedule.
        </Typography>
        <Img alt="screenshot of My Schedule user documentation" src={Screen2} />
      </Box>
    </>
  );
}

export default OverallSchedule;
