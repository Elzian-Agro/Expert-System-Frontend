import { useState } from "react";

// Material UI components
import { Container, Grid, Tabs, Tab } from "@mui/material";

// page components
import Dashboard from "./docs/dashboard";
import Configurator from "./docs/configurator";
import Contact from "./docs/contact";
import Expert from "./docs/expert";
import MySchedule from "./docs/mySchedule";
import CreateSchedule from "./docs/createSchedule";
import OverallSchedule from "./docs/overallSchedule";
import ExpertRegister from "./docs/expert-sign-in";
import FarmerRegister from "./docs/farmer-sign-in";
import UserLogin from "./docs/user-login";
import AboutUs from "./docs/about-us";
import Profile from "./docs/profile";

function Documentation() {
  const [pageIndex, setPageIndex] = useState(0);

  // doc pages
  const pages = [
    { id: 0, label: "Dashboard", component: <Dashboard /> },
    { id: 1, label: "My Schedule", component: <MySchedule /> },
    { id: 2, label: "Overall Schedule", component: <OverallSchedule /> },
    { id: 3, label: "Create Schedule", component: <CreateSchedule /> },
    { id: 4, label: "Expert", component: <Expert /> },
    { id: 5, label: "Contact Us", component: <Contact /> },
    { id: 6, label: "Profile", component: <Profile /> },
    { id: 7, label: "About Us", component: <AboutUs /> },
    { id: 8, label: "Expert Register", component: <ExpertRegister /> },
    { id: 9, label: "Farmer Register", component: <FarmerRegister /> },
    { id: 10, label: "User Login", component: <UserLogin /> },
    { id: 11, label: "Configurator", component: <Configurator /> },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={3}>
        <Tabs value={pageIndex} orientation="vertical" aria-label="nav tabs example">
          {pages.map((page) => (
            <Tab key={page.id} label={page.label} onClick={() => setPageIndex(page.id)} />
          ))}
        </Tabs>
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <Container>{pages[pageIndex].component}</Container>
      </Grid>
    </Grid>
  );
}

export default Documentation;
