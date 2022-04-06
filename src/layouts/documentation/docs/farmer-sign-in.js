import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Image component
import Img from "../Img";
// images
import mainExpert1 from "../../../assets/images/sign up farmer1.png";
import mainExpert2 from "../../../assets/images/sign up farmer2.png";
import mainExpert3 from "../../../assets/images/sign in farmer2.png";

function Farmer() {
  return (
    <div>
      <Box>
        <Typography variant="h2" component="div" gutterBottom>
          Farmer Register
        </Typography>
        <Typography variant="h4" gutterBottom>
          How to register to the website?
        </Typography>
        <Typography variant="body2" gutterBottom>
          This is the farmer sign up page where you can register to the system as a farmer by
          filling the following form and clicking on the “FARMER SIGN UP” button. You should to fill
          the form with the required fields. You have to enter the first name, last name, address,
          age, gender, number, qualification, bio, email and the password. The entering email and
          the password will be your login credentials.
        </Typography>
        <Img alt="screenshot of expert user documentation" src={mainExpert1} />
        <Img alt="screenshot of expert user documentation" src={mainExpert2} />
        <Typography variant="body2" gutterBottom mt={2}>
          You cannot get registered by the same email twice. You should enter the age by numbers and
          the phone number should be a number with 10 characters and the password length should be
          not less than 6. After Entering all those details correctly, you can register to the
          system as a farmer successfully.
        </Typography>
        <Typography variant="body2" gutterBottom mt={2}>
          If you are already a registered farmer, then you can click on the sign In in the bottom of
          the page to navigate to the sign in page.
        </Typography>
        <Img
          alt="screenshot of expert user documentation"
          // setting a default image if profile image is null
          src={mainExpert3}
        />
      </Box>
    </div>
  );
}

export default Farmer;
