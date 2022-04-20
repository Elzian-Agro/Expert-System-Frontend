import Box from "@mui/material/Box";
import MDTypography from "components/MDTypography";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import mainExpert1 from "../../../assets/images/aboutus1.png";
import mainExpert2 from "../../../assets/images/aboutus2.png";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: "100%",
});

function AboutDoc() {
  return (
    <div>
      <Box>
        <Typography variant="h2" component="div" gutterBottom>
          About Us
        </Typography>
        <MDTypography variant="body2" gutterBottom mt={4}>
          This is the page from where you can get details about the system. After logging into the
          system, you can select the about us option from the side nav to see the company about. And
          it includes the mission and the vision of the company. The below diagram shows how you can
          navigate to the about us page after signing in.
        </MDTypography>
        <Img
          alt="screenshot of expert user documentation"
          // setting a default image if profile image is null
          src={mainExpert1}
        />
        <MDTypography variant="body2" gutterBottom mt={4}>
          If a you need to see the about of the company before logging in to the system, when you
          scroll down the sign in page, you can see the footer with the about option. After clicking
          on it you can navigate to the about us page as shown below. It is just a static page which
          displays the mission and the vision of the company with a small description.
        </MDTypography>
        <Img
          alt="screenshot of expert user documentation"
          // setting a default image if profile image is null
          src={mainExpert2}
        />
      </Box>
    </div>
  );
}

export default AboutDoc;
