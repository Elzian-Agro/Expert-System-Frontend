import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Image component
import Img from "../Img";
// images
import Screen1 from "../../../assets/images/My schedule 1.png";
import Screen2 from "../../../assets/images/My schedule 2.png";

function MySchedule() {
  return (
    <>
      <Box>
        <Typography variant="h1" component="div" gutterBottom>
          My Schedule
        </Typography>
        <Typography variant="h3" gutterBottom>
          1.Navigate to My Schedule page
        </Typography>
        <Typography variant="body2" gutterBottom>
          If you are log in you will automatically navigate to Dashboard. Then you can see the side
          navigation bar at the left corner of the page. Then you can see many options such as My
          schedule, Create schedule, Overall schedule, Experts, Contact-Us, Profile and About us.
          You can click My Schedule button and you will navigate to My Schedule page. And also you
          can see booked schedules in Dashboard named as meeting links.
        </Typography>
        <br />
        <Img alt="screenshot of My Schedule user documentation" src={Screen1} />
        <br />
        <br />
        <Typography variant="h3" gutterBottom>
          2.Use My Schedule Page
        </Typography>
        <Typography variant="body2" gutterBottom>
          If you navigate to My Schedule page you can see booked schedules in your page. You can use
          the meeting link to join the meeting on allocated time. And also you can find the meeting
          links in dashboard. If you don’t have any booked schedule you will get alert message.
        </Typography>
        <br />
        <Img alt="screenshot of My Schedule user documentation" src={Screen2} />
      </Box>
    </>
  );
}

export default MySchedule;
