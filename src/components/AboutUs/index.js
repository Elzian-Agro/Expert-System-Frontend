import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Icon from "@mui/material/Icon";
import { IconButton } from "@mui/material";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

// Material Dashboard 2 React components
import MDBox from "../MDBox";
import MDTypography from "../MDTypography";
import MDAvatar from "../MDAvatar/index";

// Material Dashboard 2 PRO React base styles
// import breakpoints from "../../assets/theme/base/breakpoints";

// Images
import backgroundImage from "../../assets/images/bg-paddy.jpg";
import profilepic from "../../assets/images/logo.png";

const title = "WE ARE ELZIAN AGRO";

const about =
  "WE ARE PROVIDING AGRI-TECH SOLUTIONS FOR FARMERS, MASS CULTIVATORS TO SOLVE THEIR PROBLEMS!";

const desc =
  "ELZIAN is a Private Limited Company that was incorporated under the Sri Lankan Companies Act in August 2020. ELZIAN AGRO is a part of ELZIAN (Private) Limited that provides smart agronomy solutions to support mass cultivation farmers to monitor and automate their farmland. We offer customized monitoring information and automation solutions through trending digital technologies to optimize our customers' harvest and productively utilize their resources. According to United Nations Sustainable Reports, farmers negatively impact due to extreme weather changes and limited resources. ELZIAN AGRO is a start-up that provides a soil and weather monitoring system for indoor and mass cultivation farmers and supports them to automate their farmland. We offer customized monitoring information and automation solutions through the sensor network to optimize our customers' harvest and productively utilize their resources. Our customers can monitor their farmland anywhere, anytime, and make efficient and rational decisions to maximize their profitability.";

const vision =
  "Improving lives of communities through a digitalized agricultural system and empower sustainable practices.";

const mission =
  "Our mission statement is simple. Utilize the customer's requirements and provide the best agriculture technologies with validation and verification to maximize customer satisfaction.";
const AboutUs = () => (
  <MDBox position="relative" mb={5}>
    <MDBox
      display="flex"
      alignItems="center"
      position="relative"
      minHeight="18.75rem"
      borderRadius="xl"
      sx={{
        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.info.main, 0.0),
            rgba(gradients.info.state, 0.0)
          )}, url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
        overflow: "hidden",
        opacity: 0.8,
      }}
    />
    <Card
      sx={{
        position: "relative",
        alignItems: "center",
        display: "flex",
        mt: -2,
        mx: 3,
        py: 2,
        px: 2,
      }}
    >
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item>
          <MDAvatar
            src={profilepic}
            alt="profile-image"
            size="xl"
            display="flex"
            justifyContent="center"
            alignItems="center"
            shadow="sm"
          />
          <MDTypography variant="h4" textAlign="center" fontWeight="medium" mt={2}>
            {title}
          </MDTypography>
        </Grid>
        <Grid item>
          <MDBox height="100%" mt={0.5} lineHeight={10}>
            <MDTypography variant="h6" textAlign="center" fontWeight="medium">
              {about}
            </MDTypography>
          </MDBox>
          <MDBox height="100%" mt={1} lineHeight={1}>
            <MDTypography
              variant="button"
              color="text"
              display="flex"
              align="justify"
              fontWeight="regular"
              justifyContent="center"
            >
              {desc}
            </MDTypography>
          </MDBox>
        </Grid>
      </Grid>
      {}
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
        <Grid item xs={6}>
          <Card
            sx={{
              position: "relative",
              mt: 1,
              mx: 10,
              py: 2,
              px: 2,
            }}
          >
            <IconButton>
              <RemoveRedEyeIcon />
            </IconButton>
            <MDTypography variant="h4" textAlign="center" fontWeight="medium" mt={1}>
              Vision
              {/* <IconButton>
                <RemoveRedEyeIcon />
              </IconButton> */}
            </MDTypography>
            <MDBox height="100%" mt={1.5} lineHeight={1}>
              <MDTypography
                variant="button"
                color="text"
                display="flex"
                align="justify"
                fontWeight="regular"
                justifyContent="center"
              >
                {vision}
              </MDTypography>
            </MDBox>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{
              position: "relative",
              mt: 1,
              mx: 10,
              py: 2,
              px: 2,
            }}
          >
            <IconButton>
              <TrackChangesIcon />
            </IconButton>
            <MDTypography variant="h4" textAlign="center" fontWeight="medium" mt={1}>
              Mission
              {/* <IconButton>
                <TrackChangesIcon />
              </IconButton> */}
            </MDTypography>
            <MDBox height="100%" mt={1.5} lineHeight={1}>
              <MDTypography
                variant="button"
                color="text"
                justifyContent="center"
                fontWeight="regular"
                display="flex"
                align="justify"
              >
                {mission}
              </MDTypography>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </Card>
    {/* <Grid item>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={10} md={10} lg={6}>
          <Card
            sx={{
              position: "relative",
              mt: -2,
              mx: 3,
              py: 2,
              px: 2,
            }}
          >
            <MDTypography variant="h4" fontWeight="medium" mt={2}>
              Vision
              <IconButton>
                <RemoveRedEyeIcon />
              </IconButton>
            </MDTypography>
            <MDBox height="100%" mt={1} lineHeight={1}>
              <MDTypography variant="button" color="text" fontWeight="regular">
                {vision}
              </MDTypography>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={10} md={10} lg={6}>
          <Card
            sx={{
              position: "relative",
              mt: -2,
              mx: 3,
              py: 2,
              px: 2,
            }}
          >
            <MDTypography variant="h4" fontWeight="medium" mt={2}>
              Mission
              <IconButton>
                <TrackChangesIcon />
              </IconButton>
            </MDTypography>
            <MDBox height="100%" mt={1} lineHeight={1}>
              <MDTypography variant="button" color="text" fontWeight="regular">
                {mission}
              </MDTypography>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </Grid> */}
  </MDBox>
);

export default AboutUs;
