import MDTypography from "components/MDTypography";
// Image component
import Img from "../Img";
// images
import dashboard1 from "../../../assets/images/docs/dashboard/dashboard_1.png";
import dashboard2 from "../../../assets/images/docs/dashboard/dashboard_2.png";

function Dashboard() {
  return (
    <>
      <MDTypography variant="h2" gutterBottom>
        Dashboard
      </MDTypography>
      <div>
        <MDTypography variant="h4" gutterBottom>
          How to navigate to the Dashboard page
        </MDTypography>
        <MDTypography variant="body2" gutterBottom>
          Initially when a user log-in to the system he will automatically navigate to the
          Dashboard. Then the user can see a side navigation bar at the left corner of the page.
          Then there are many options such as Dashboard, My schedule, Create schedule, Overall
          schedule, Experts, Contact-Us, Profile and About us. So, the user can go to the Dashboard
          page by clicking the Dashboard option.
        </MDTypography>
      </div>
      <div>
        <MDTypography variant="h4" gutterBottom>
          Dashboard page
        </MDTypography>
        <MDTypography variant="body2" gutterBottom>
          Some of the experts are displaying in the Dashboard with their details.
        </MDTypography>
        <Img alt="screenshots of dashboard doc" src={dashboard1} />
        <MDTypography variant="body2" gutterBottom mt={3}>
          Some of the booked meetings are available on the Dashboard page with meeting details and
          meeting link
        </MDTypography>
        <Img alt="screenshots of dashboard doc" src={dashboard2} />
      </div>
    </>
  );
}

export default Dashboard;
