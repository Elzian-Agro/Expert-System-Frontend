import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MDTypography from "components/MDTypography";

// Image component
import Img from "../Img";
// images
import Screen1 from "../../../assets/images/docs/schedules/Create schedule 1.png";
import Screen2 from "../../../assets/images/docs/schedules/Create schedule 2.png";

function CreateSchedule() {
  return (
    <>
      <Box>
        <Typography variant="h1" component="div" gutterBottom>
          Create Schedule
        </Typography>
        <Typography variant="h3" gutterBottom>
          Navigate to Create Schedule Page
        </Typography>
        <MDTypography variant="body2" gutterBottom>
          If you are log in you will automatically navigate to Dashboard. Then you can see the side
          navigation bar at the left corner of the page. You can click Create Schedule button and
          you will navigate to Create Schedule page.
        </MDTypography>
        <br />
        <Img alt="screenshot of My Schedule user documentation" src={Screen1} />
        <br />
        <br />
        <Typography variant="h3" gutterBottom>
          Use Create Schedule Page
        </Typography>
        <MDTypography variant="body2" gutterBottom>
          Here you can see Meeting Name, Meeting Link and Description as input fields. In the bottom
          you can see Date, Time, Clear Button and Save Button.
          <br />
          I. Meeting Name - You can click the Meeting Name and you can add your name for the
          meeting.
          <br />
          II. Meeting Link - You can create your Meeting Link for your meeting.
          <br />
          III.Description β You can describe your meeting in Description section.
          <br />
          IV. Date β In here You can manually type the date or click the calendar icon and you can
          select your date.
          <br />
          V.Time β Itβs also same like date you can manually add the time or click the clock icon
          and you can add the time.
          <br />
          VI. Save Button β If you create your schedule you can simply click Save button and you can
          create your schedule.
          <br />
          VII. Clear Button β If you donβt want to create schedule you can simply click Clear Button
          to cancel schedule.
        </MDTypography>
        <Img alt="screenshot of My Schedule user documentation" src={Screen2} />
      </Box>
    </>
  );
}

export default CreateSchedule;
