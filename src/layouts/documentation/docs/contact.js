import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Image component
import Img from "../Img";
// images
import contactOverview from "../../../assets/images/contact overview.png";
import navigateContactUs from "../../../assets/images/contactus-overview-navigate.jpg";
import submitContact from "../../../assets/images/submit.jpg";
import successcontact from "../../../assets/images/contact success.jpg";

function Expert() {
  return (
    <div>
      <Box>
        <Typography variant="h1" component="div" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h2" gutterBottom>
          Contact Us page details
        </Typography>
        <Typography variant="body2" gutterBottom>
          This is the page that uses to users to give their feedback about our system and
          functionalities. And the users can contact the team and clear their doubts using this
          page. The system shows the relevant details about the company. Such as company address,
          email, contact number and the website. In the other hand we have some fields to create the
          feedback email in here users can give their feedback that will automatically forward to
          the company email. In Their user can customize his email structure by giving the first
          name, last name, email subject, user mobile number and the message.
        </Typography>
        <Img alt="screenshot of contact us documentation" src={contactOverview} />
        <Typography variant="h2" gutterBottom mt={7}>
          How to navigate to Conatct Us page
        </Typography>
        <Typography variant="body2" gutterBottom>
          Initially when a user log-in to the system he will automatically navigate to the
          Dashboard. Then the user can see a side navigation bar at the left corner of the page.
          Then there are many options such as My schedule, Create schedule, Overall schedule,
          Experts, Contact-Us, Profile and About us. So, the user can go to the Contact-Us page by
          clicking the Contact-Us option.
        </Typography>
        <Img alt="screenshot of contact us documentation" src={navigateContactUs} />
        <Typography variant="h2" gutterBottom mt={7}>
          How to send message.
        </Typography>
        <Typography variant="body2" gutterBottom>
          In the bottom of the page there will be a button called submit. After adding all the
          relevant details, the user can send the mail by clicking the “SUBMIT” button. And there
          will be a toast message will be shown in the page. By that user can confirm that the mail
          has been sent.
        </Typography>
        <Img alt="screenshot of contact us documentation" src={submitContact} />
        <Img alt="screenshot of contact us documentation" src={successcontact} />
      </Box>
    </div>
  );
}

export default Expert;
