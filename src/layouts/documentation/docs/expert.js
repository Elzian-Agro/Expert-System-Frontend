import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MDTypography from "components/MDTypography";

// Image component
import Img from "../Img";
// images
import mainExpert from "../../../assets/images/docs/expert/expert-main.png";
import navigateExpert from "../../../assets/images/docs/expert/navigate-expert.png";

function Expert() {
  return (
    <div>
      <Box>
        <Typography variant="h1" component="div" gutterBottom>
          Expert
        </Typography>
        <Typography variant="h2" gutterBottom>
          Expert page details
        </Typography>
        <MDTypography variant="body2" gutterBottom>
          In this page the users can get the details of every expert and they can also identify the
          position of the expert and the organization the expert works in. Users can get relevant
          information regarding their problems by contacting the experts.
        </MDTypography>
        <Img alt="screenshot of expert user documentation" src={mainExpert} />
        <Typography variant="h2" gutterBottom mt={7}>
          How to navigate to experts page
        </Typography>
        <MDTypography variant="body2" gutterBottom>
          Initially when a user log in to the system then they will be automatically navigating to
          the dashboard. And on the left the users can see the navigation bar on the left side on
          their screen. There are many options such as:- My Schedule, Create Schedule, Experts,
          Contact Us, Profile, and About Us. As you can see the below image it shows an oval mark on
          the experts option. When the user clicks on the experts option then the user will be
          navigated to the Experts Page which you can see in the figure 1
        </MDTypography>
        <Img alt="screenshot of expert user documentation" src={navigateExpert} />
      </Box>
    </div>
  );
}

export default Expert;
