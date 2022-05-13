import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MDTypography from "components/MDTypography";
import { styled } from "@mui/material/styles";

import mainExpert1 from "../../../assets/images/docs/auth/user sign in.png";
import mainExpert2 from "../../../assets/images/docs/auth/nianalogout.png";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: "100%",
});

function LoginDoc() {
  return (
    <div>
      <Box>
        <Typography variant="h2" component="div" gutterBottom>
          Expert/Farmer Sign In
        </Typography>
        <Typography variant="h4" gutterBottom>
          How to login to the website?
        </Typography>
        <Img
          alt="screenshot of expert user documentation"
          // setting a default image if profile image is null
          src={mainExpert1}
        />
        <MDTypography variant="body2" gutterBottom mt={4}>
          This is the sign in page which is common for both expert and the farmer to sign in to the
          system. This is the first page a you can see before entering to the system. You have to
          enter the correct credentials for a successful log in or else you can use the Google,
          Microsoft, Facebook or LinkedIn accounts to sign in to the system. If you enter invalid
          email and invalid password, it shows an error message saying its an invalid email or
          password. You must be a registered user to use the system and if you are not registered,
          you can use the expert and the farmer signup buttons to get registered to the system
          according to your type. If you want to register as an expert user, you can click on expert
          in the bottom of the sign in page to sign up to the system and if you want to register to
          the system as a farmer, you can click on farmer.
        </MDTypography>
        <Typography variant="h4" gutterBottom mt={4}>
          How to logout from the website?
        </Typography>
        <Img alt="screenshot of expert user documentation" src={mainExpert2} />
        <MDTypography variant="body2" gutterBottom mt={4}>
          When you logged in to the system, you can see a nav bar having a serach bar and some other
          clickable optons. There, after clicking on the profile icon, you can view the screen like
          above with the profile picture and the name related to you. You can simply click on the
          logout option and get logged out from the system.
        </MDTypography>
      </Box>
    </div>
  );
}

export default LoginDoc;
