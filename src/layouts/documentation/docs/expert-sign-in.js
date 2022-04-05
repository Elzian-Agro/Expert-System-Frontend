import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import mainExpert1 from "../../../assets/images/sign up expert1.png";
import mainExpert2 from "../../../assets/images/sign up expert2.png";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: "100%",
});

function Expert() {
  return (
    <div>
      <Box>
        <Typography variant="h2" component="div" gutterBottom>
          Expert Register
        </Typography>
        <Typography variant="h4" gutterBottom>
          How to register to the website?
        </Typography>
        <Typography variant="body2" gutterBottom>
          This is the Expert sign up page where you can sign up for the system as an expert. After
          adding the relevant details and clicking on the “EXPERT SIGN UP” button you can register
          to the system. You should to fill the form with the required fields. So, you have to enter
          the first name, last name, address, age, gender, number, qualification, institution, bio,
          email and the password. The entering email and the password will be your login
          credentials.
        </Typography>
        <Img
          alt="screenshot of expert user documentation"
          // setting a default image if profile image is null
          src={mainExpert1}
        />
        <Img
          alt="screenshot of expert user documentation"
          // setting a default image if profile image is null
          src={mainExpert2}
        />
        <Typography variant="body2" gutterBottom mt={2}>
          You cannot get registered by the same email twice. You should enter the age by numbers and
          the phone number should have 10 characters and the password length should be not less than
          6. After Entering all those details correctly, you can register to the system as an expert
          successfully.
        </Typography>
        <Typography variant="body2" gutterBottom mt={2}>
          If you are already a registered expert, then you can click on the sign-in in the bottom of
          the page to navigate to the sign in page.
        </Typography>
      </Box>
    </div>
  );
}

export default Expert;
