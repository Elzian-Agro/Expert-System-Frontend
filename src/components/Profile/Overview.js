/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MDBox from "../MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import ProfileInfoCard from "../../examples/Cards/InfoCards/ProfileInfoCard";
import { TransitionsModal } from "./Model";

function Overview(props) {
  const { p } = props;
  return (
    <DashboardLayout>
      <MDBox mb={5} />
      <MDBox mt={5} mb={5}>
        <Grid container spacing={-2}>
          <Grid item xs={12} md={12} xl={4} sx={{ display: "flex" }}>
            <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
            {p.userType === "Farmer" ? (
              <ProfileInfoCard
                title="profile information"
                info={{
                  fullName: `${p.userFirstName} ${p.userLastName}`,
                  description: p.userBio,
                  mobile: p.userPhone,
                  email: p.userEmail,
                  location: p.userAddress,
                }}
                social={[]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
            ) : (
              <ProfileInfoCard
                title="profile information"
                info={{
                  fullName: ` ${p.userFirstName} ${p.userLastName}`,
                  description: p.userBio,
                  mobile: p.userPhone,
                  email: p.userEmail,
                  location: p.userAddress,
                  Qualification: p.userQulifications,
                  Institution: p.userInstituteWork,
                }}
                social={[]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
            )}
            <Divider orientation="vertical" sx={{ mx: 0 }} />
          </Grid>
        </Grid>
      </MDBox>
      <TransitionsModal user={p} />
    </DashboardLayout>
  );
}

export default Overview;
