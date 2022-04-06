import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Image component
import Img from "../Img";
// images
import profileOverview from "../../../assets/images/profile overview.png";
import navigateProfile from "../../../assets/images/profile navigate.jpg";
import editProfile from "../../../assets/images/edit profile.jpg";
import saveDetail from "../../../assets/images/save detail.jpg";
import resetDetail from "../../../assets/images/reset.jpg";
import imageSave from "../../../assets/images/img save n upload.jpg";
import successPhoto from "../../../assets/images/photo success.png";

function Expert() {
  return (
    <div>
      <Box>
        <Typography variant="h1" component="div" gutterBottom>
          Profile
        </Typography>
        <Typography variant="h2" gutterBottom>
          Profile page details
        </Typography>
        <Typography variant="body2" gutterBottom>
          This is the page that shows the user details and user profile image. In this profile page
          we have two types. Expert profile page and Farmer profile page are the two types of
          profile pages. Both contain profile image, full name, phone number, address, and the bio
          of the user. But the Expert page contains additional two information called Expert
          educational qualifications and Institute. And the page has facilities to edit the user
          details and user image.
        </Typography>
        <Img alt="screenshot of profile page documentation" src={profileOverview} />
        <Typography variant="h2" gutterBottom mt={7}>
          How to navigate to profile page
        </Typography>
        <Typography variant="body2" gutterBottom>
          Initially when a user log-in to the system he will automatically navigate to the
          Dashboard. Then the user can see a side navigation bar at the left corner of the page.
          Then there are many options such as My schedule, Create schedule, Overall schedule,
          Experts, Contact-Us, Profile and About us. So, the user can go to the profile page by
          clicking the profile option.
        </Typography>
        <Img alt="screenshot of profile page documentation" src={navigateProfile} />
        <Typography variant="h2" gutterBottom mt={7}>
          Edit User Details and Profile picture.
        </Typography>
        <Typography variant="body2" gutterBottom>
          To edit the User profile, we have an option called edit profile in that profile page.
        </Typography>
        <Img alt="screenshot of profile page documentation" src={editProfile} />
        <Typography variant="body2" gutterBottom>
          The user has editable fields to edit the user details. By clicking the fields and user can
          be able to edit the fields. And by clicking the “SAVE” button the user can be able to save
          the edited details. there is a button called “RESET” in the edit profile page. When a User
          need to get the previous details or undo the edited detail, he can click that button and
          get the previous details.
        </Typography>
        <Typography variant="body2" gutterBottom>
          And there is a button called “RESET” in the edit profile page. When a User need to get the
          previous details or undo the edited detail, he can click that button and get the previous
          details.
        </Typography>
        <Img alt="screenshot of profile page documentation" src={saveDetail} />
        <Img alt="screenshot of profile page documentation" src={resetDetail} />
        <Typography variant="body2" gutterBottom>
          To edit the user image the user needs to click the camera icon and he will direct to the
          local folder, and he can choose his photo. And, near to the camera icon there is button
          called “SAVE” with a camera icon. That button is used for saving the profile picture
          changes. And user can confirm the successful photo upload process by seeing a toast
          message at the top right corner after saving image upload. .
        </Typography>
        <Img alt="screenshot of profile page documentation" src={imageSave} />
        <Img alt="screenshot of profile page documentation" src={successPhoto} />
      </Box>
    </div>
  );
}

export default Expert;
